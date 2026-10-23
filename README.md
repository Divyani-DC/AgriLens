# AgriLens AI — Crop Disease Prediction System

**Machine Learning ISE-2 Practical Examination Project**  
*Intelligent Crop Health & Disease Detection using Computer Vision and Deep Learning*

---

## 📌 Project Overview
AgriLens AI is an end-to-end crop pathology classification system designed to assist agronomists, farmers, and agricultural extension workers in rapid early detection of crop diseases from leaf photographs. The project leverages **MobileNetV2** transfer learning trained on the benchmark **PlantVillage** dataset covering **38 distinct crop-disease classes** across 14 major agricultural crops.

### Key Objectives
1. **Automated Disease Detection:** Identify foliar fungal, bacterial, viral, and mite infestations with high calibrated confidence.
2. **Actionable Agricultural Guidance:** Provide immediate precautions, cultural practices, and safe treatment recommendations for each predicted condition.
3. **Edge & Cloud Deployment:** Implement lightweight architecture suitable for Streamlit Community Cloud and low-power edge deployment.

---

## 🏗️ System Architecture & ML Pipeline

```
[Uploaded Leaf Image (JPG/PNG)]
               │
               ▼
   [Validation & Format Check]
               │
               ▼
 [Bilinear Resize to (224, 224, 3)]
               │
               ▼
[Normalization: (x / 127.5) - 1.0 -> [-1, 1]]
               │
               ▼
[MobileNetV2 Feature Extractor (Inverted Residuals)]
               │
               ▼
    [Global Average Pooling 2D]
               │
               ▼
       [Dropout Layer (0.2)]
               │
               ▼
 [Dense Softmax Classifier (38 Class Probabilities)]
               │
               ▼
[Ranked Predictions & Treatment Mapping (disease_info.py)]
```

### Model Specifications
- **Base Architecture:** MobileNetV2 pretrained on ImageNet (1.4 million images).
- **Core Mechanism:** Depthwise Separable Convolutions with Linear Bottlenecks.
- **Parameters:** ~3.5 Million parameters (vs 25.6M for ResNet-50).
- **Dataset:** PlantVillage (54,305 labeled images, 38 classes).
- **Input Dimensions:** `(224, 224, 3)` RGB.
- **Loss Function:** Categorical Cross-Entropy.
- **Optimizer:** Adam ($\alpha = 10^{-4}$ with learning rate reduction on plateau).

---

## 💻 Local Installation & Execution (Windows PowerShell)

Follow these steps in Windows PowerShell to set up and run the application locally:

```powershell
# 1. Open PowerShell and verify Python installation (Python 3.10 or 3.11 recommended)
python --version

# 2. Clone or navigate to the project directory
cd crop-disease-prediction

# 3. Create a Python virtual environment named .venv
python -m venv .venv

# 4. Activate the virtual environment
.\.venv\Scripts\Activate.ps1
# If PowerShell script execution is restricted, run:
# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# 5. Upgrade pip to latest version
python -m pip install --upgrade pip

# 6. Install dependencies from requirements.txt
pip install -r requirements.txt

# 7. Launch the Streamlit application
streamlit run app.py
```

The application will launch automatically in your default browser at `http://localhost:8501`.

---

## 🧪 Automated Testing

Run the automated test suite using `pytest`:

```powershell
python -m pytest tests -v
```

The test suite validates:
- Image format conversions (RGB, RGBA, Grayscale).
- Input tensor dimensions `(1, 224, 224, 3)` and normalization range `[-1.0, 1.0]`.
- Calibrated probability bounds $(0.0 \le p \le 1.0)$.
- Exact 38-class mapping with `disease_info.py`.

---

## ☁️ GitHub & Streamlit Community Cloud Deployment

### 1. Push to GitHub
```powershell
git init
git add .
git commit -m "feat: complete AgriLens AI Crop Disease Prediction system"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/crop-disease-prediction.git
git push -u origin main
```

### 2. Deploy on Streamlit Community Cloud
1. Navigate to [share.streamlit.io](https://share.streamlit.io/) and log in with GitHub.
2. Click **"New app"**.
3. Select your repository: `crop-disease-prediction`.
4. Set branch: `main`.
5. Set Main file path: `app.py`.
6. Click **"Deploy!"**.
7. Your app will be live with a public URL `https://<your-app-name>.streamlit.app/`.

---

## ⚖️ Diagnostic Advisory
This system is developed for preliminary educational screening and foliar pathology demonstration. Machine learning models can make errors due to lighting variance or atypical leaf manifestations. Always confirm critical disease diagnoses with certified agricultural extension specialists before applying chemical treatments.
