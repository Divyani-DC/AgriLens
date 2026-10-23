"""
Unit Tests for Image Preprocessing
Validates input dimensions, RGB conversion, and tensor normalization.
"""

import pytest
import numpy as np
from PIL import Image
from model import preprocess_image, TARGET_IMAGE_SIZE, load_class_labels

def test_load_class_labels():
    """Verify that class labels load properly and contain exactly 38 PlantVillage classes."""
    labels = load_class_labels()
    assert isinstance(labels, list)
    assert len(labels) == 38
    assert "Tomato___Early_blight" in labels
    assert "Apple___healthy" in labels

def test_preprocess_rgb_image():
    """Verify standard RGB image preprocessing shape and normalization range."""
    test_img = Image.new("RGB", (500, 350), color=(100, 180, 70))
    tensor = preprocess_image(test_img)

    # Validate output shape: (1, 224, 224, 3)
    assert tensor.shape == (1, TARGET_IMAGE_SIZE[0], TARGET_IMAGE_SIZE[1], 3)
    assert tensor.dtype == np.float32

    # Validate MobileNetV2 normalization [-1.0, 1.0]
    assert np.all(tensor >= -1.0)
    assert np.all(tensor <= 1.0)

def test_preprocess_rgba_image_converts_to_rgb():
    """Verify RGBA transparent images are safely converted to 3-channel RGB."""
    test_img_rgba = Image.new("RGBA", (300, 300), color=(120, 200, 50, 128))
    tensor = preprocess_image(test_img_rgba)
    assert tensor.shape == (1, 224, 224, 3)

def test_preprocess_grayscale_image():
    """Verify single-channel grayscale images are replicated to 3 RGB channels."""
    test_gray = Image.new("L", (150, 150), color=128)
    tensor = preprocess_image(test_gray)
    assert tensor.shape == (1, 224, 224, 3)

def test_preprocess_none_image_raises_error():
    """Verify None input produces a clear ValueError."""
    with pytest.raises(ValueError, match="Cannot preprocess a None image"):
        preprocess_image(None)
