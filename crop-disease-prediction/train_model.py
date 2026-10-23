"""
Reproducible MobileNetV2 Training Script for PlantVillage Dataset
Trains, validates, evaluates, and exports weights and class label mapping.
"""

import os
import json
import argparse
from typing import Tuple
import numpy as np

def build_mobilenetv2_classifier(num_classes: int, input_shape: Tuple[int, int, int] = (224, 224, 3)):
    """Constructs MobileNetV2 with custom classification head for transfer learning."""
    import tensorflow as tf
    from tensorflow.keras import layers, models
    from tensorflow.keras.applications import MobileNetV2

    # Data augmentation pipeline
    data_augmentation = tf.keras.Sequential([
        layers.RandomFlip("horizontal_and_vertical"),
        layers.RandomRotation(0.2),
        layers.RandomZoom(0.15),
        layers.RandomContrast(0.1)
    ], name="data_augmentation")

    # Base pretrained model
    base_model = MobileNetV2(
        input_shape=input_shape,
        include_top=False,
        weights="imagenet"
    )
    base_model.trainable = False  # Freeze base weights initially

    inputs = tf.keras.Input(shape=input_shape)
    x = data_augmentation(inputs)
    # MobileNetV2 preprocess scaling from [0, 255] to [-1, 1]
    x = layers.Rescaling(scale=1./127.5, offset=-1)(x)
    x = base_model(x, training=False)
    x = layers.GlobalAveragePooling2D()(x)
    x = layers.Dropout(0.2)(x)
    outputs = layers.Dense(num_classes, activation="softmax", name="predictions")(x)

    model = models.Model(inputs, outputs, name="CropDisease_MobileNetV2")
    return model, base_model

def train(data_dir: str, output_model_path: str = "models/crop_disease_mobilenetv2.keras", epochs: int = 15, batch_size: int = 32):
    """Executes end-to-end dataset loading, training, evaluation, and serialization."""
    import tensorflow as tf

    if not os.path.exists(data_dir):
        raise FileNotFoundError(f"Dataset directory '{data_dir}' not found. Download PlantVillage dataset first.")

    os.makedirs(os.path.dirname(output_model_path), exist_ok=True)

    print(f"Loading PlantVillage dataset from: {data_dir}")
    train_ds = tf.keras.utils.image_dataset_from_directory(
        data_dir,
        validation_split=0.2,
        subset="training",
        seed=123,
        image_size=(224, 224),
        batch_size=batch_size
    )

    val_ds = tf.keras.utils.image_dataset_from_directory(
        data_dir,
        validation_split=0.2,
        subset="validation",
        seed=123,
        image_size=(224, 224),
        batch_size=batch_size
    )

    class_names = train_ds.class_names
    num_classes = len(class_names)
    print(f"Detected {num_classes} classes. Exporting labels to labels.json...")

    with open("labels.json", "w", encoding="utf-8") as f:
        json.dump(class_names, f, indent=2)

    # Performance optimization: prefetch
    AUTOTUNE = tf.data.AUTOTUNE
    train_ds = train_ds.cache().prefetch(buffer_size=AUTOTUNE)
    val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

    # Build model
    model, base_model = build_mobilenetv2_classifier(num_classes)

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"]
    )

    callbacks = [
        tf.keras.callbacks.EarlyStopping(monitor="val_loss", patience=3, restore_best_weights=True),
        tf.keras.callbacks.ModelCheckpoint(output_model_path, monitor="val_accuracy", save_best_only=True)
    ]

    print("Phase 1: Training top classification head with frozen backbone...")
    model.fit(train_ds, validation_data=val_ds, epochs=epochs, callbacks=callbacks)

    print("Phase 2: Fine-tuning top 30 layers of MobileNetV2 with low learning rate...")
    base_model.trainable = True
    # Freeze all layers before layer 100
    for layer in base_model.layers[:100]:
        layer.trainable = False

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"]
    )

    model.fit(train_ds, validation_data=val_ds, epochs=epochs // 2, callbacks=callbacks)

    print(f"Model saved successfully to: {output_model_path}")
    print("Training pipeline complete.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Train Crop Disease Classifier")
    parser.add_argument("--data_dir", type=str, default="dataset/PlantVillage", help="Path to PlantVillage root directory")
    parser.add_argument("--epochs", type=int, default=15, help="Number of training epochs")
    parser.add_argument("--output", type=str, default="models/crop_disease_mobilenetv2.keras", help="Output model path")
    args = parser.parse_args()

    try:
        train(args.data_dir, output_model_path=args.output, epochs=args.epochs)
    except FileNotFoundError as err:
        print(f"Notice: {err}")
        print("To run training, place PlantVillage dataset in 'dataset/PlantVillage' and run:")
        print("python train_model.py --data_dir dataset/PlantVillage")
