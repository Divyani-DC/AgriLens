"""
Standard Library Test Runner for ISE-2 Verification
Runs all tests using Python's built-in unittest module.
"""

import unittest
import sys
import os
import json
import numpy as np
from PIL import Image

# Ensure root directory is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from model import preprocess_image, TARGET_IMAGE_SIZE, load_class_labels, CropDiseaseModel
from disease_info import DISEASE_INFO

class TestPreprocessing(unittest.TestCase):
    def test_load_class_labels(self):
        labels = load_class_labels()
        self.assertIsInstance(labels, list)
        self.assertEqual(len(labels), 38)
        self.assertIn("Tomato___Early_blight", labels)
        self.assertIn("Apple___healthy", labels)

    def test_preprocess_rgb_image(self):
        test_img = Image.new("RGB", (400, 300), color=(100, 180, 70))
        tensor = preprocess_image(test_img)
        self.assertEqual(tensor.shape, (1, TARGET_IMAGE_SIZE[0], TARGET_IMAGE_SIZE[1], 3))
        self.assertEqual(tensor.dtype, np.float32)
        self.assertTrue(np.all(tensor >= -1.0))
        self.assertTrue(np.all(tensor <= 1.0))

    def test_preprocess_rgba_converts(self):
        test_rgba = Image.new("RGBA", (200, 200), color=(120, 200, 50, 128))
        tensor = preprocess_image(test_rgba)
        self.assertEqual(tensor.shape, (1, 224, 224, 3))

    def test_preprocess_grayscale(self):
        test_gray = Image.new("L", (150, 150), color=128)
        tensor = preprocess_image(test_gray)
        self.assertEqual(tensor.shape, (1, 224, 224, 3))

    def test_none_image_raises_value_error(self):
        with self.assertRaises(ValueError):
            preprocess_image(None)

class TestPrediction(unittest.TestCase):
    def setUp(self):
        self.model = CropDiseaseModel()

    def test_prediction_output(self):
        sample_img = Image.new("RGB", (256, 256), color=(40, 160, 40))
        result = self.model.predict(sample_img, top_k=3)
        self.assertIn("top_prediction", result)
        self.assertIn("candidates", result)
        self.assertEqual(len(result["candidates"]), 3)

        top = result["top_prediction"]
        self.assertIn("crop", top)
        self.assertIn("condition", top)
        self.assertIn("score", top)
        self.assertTrue(0.0 <= top["score"] <= 1.0)
        self.assertIn(top["class_name"], self.model.labels)

    def test_disease_info_integrity(self):
        for label in self.model.labels:
            self.assertIn(label, DISEASE_INFO)
            info = DISEASE_INFO[label]
            self.assertIn("crop", info)
            self.assertIn("condition", info)
            self.assertIn("symptoms", info)
            self.assertIn("treatment", info)
            self.assertTrue(len(info["symptoms"]) > 0)

if __name__ == "__main__":
    unittest.main()
