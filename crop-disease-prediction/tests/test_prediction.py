"""
Unit Tests for Model Prediction Pipeline
Validates inference output structure, confidence bounds, and class mapping.
"""

import pytest
from PIL import Image
from model import CropDiseaseModel
from disease_info import DISEASE_INFO

@pytest.fixture(scope="module")
def model_instance():
    """Shared model fixture."""
    return CropDiseaseModel()

def test_prediction_output_structure(model_instance):
    """Verify inference returns required keys, confidence scores, and top-k rankings."""
    sample_img = Image.new("RGB", (256, 256), color=(40, 160, 40))
    result = model_instance.predict(sample_img, top_k=3)

    assert "top_prediction" in result
    assert "candidates" in result
    assert len(result["candidates"]) == 3

    top = result["top_prediction"]
    assert "class_name" in top
    assert "crop" in top
    assert "condition" in top
    assert "is_healthy" in top
    assert "score" in top
    assert "percentage" in top

    # Calibrated probability check: score between 0.0 and 1.0
    assert 0.0 <= top["score"] <= 1.0
    assert top["class_name"] in model_instance.labels

def test_disease_info_matches_model_classes(model_instance):
    """Verify that every supported model label has a corresponding disease info profile."""
    for label in model_instance.labels:
        assert label in DISEASE_INFO, f"Missing disease information entry for class: {label}"
        info = DISEASE_INFO[label]
        assert "crop" in info
        assert "condition" in info
        assert "symptoms" in info
        assert "prevention" in info
        assert "treatment" in info
        assert len(info["symptoms"]) > 0

def test_healthy_vs_diseased_label_logic(model_instance):
    """Verify that healthy classes are accurately tagged is_healthy=True."""
    healthy_label = "Apple___healthy"
    diseased_label = "Tomato___Early_blight"

    assert DISEASE_INFO[healthy_label]["is_healthy"] is True
    assert DISEASE_INFO[diseased_label]["is_healthy"] is False
