import React, { useState } from 'react';
import { Code2, Terminal, Cloud, Copy, Check, FileCode, FolderTree, ExternalLink } from 'lucide-react';

export const CodebaseExportView: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('app.py');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const powershellCommands = `# 1. Verify Python 3.10+ installation
python --version

# 2. Navigate to project directory
cd crop-disease-prediction

# 3. Create virtual environment
python -m venv .venv

# 4. Activate virtual environment
.\\.venv\\Scripts\\Activate.ps1
# If script execution is restricted in PowerShell, run:
# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# 5. Upgrade pip & install dependencies
python -m pip install --upgrade pip
pip install -r requirements.txt

# 6. Run the application
streamlit run app.py

# 7. Run automated test suite
python -m pytest tests -v`;

  const githubCommands = `# Initialize Git repository
git init
git add .
git commit -m "feat: complete AgriLens AI Crop Disease Prediction system"
git branch -M main

# Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_USERNAME>/crop-disease-prediction.git
git push -u origin main`;

  const filesMap: Record<string, { desc: string; snippet: string }> = {
    'app.py': {
      desc: 'Complete Streamlit web interface with file uploader, preview, real inference, and treatment guidance.',
      snippet: `import streamlit as st
from PIL import Image
from model import CropDiseaseModel
from disease_info import DISEASE_INFO, DISCLAIMER_TEXT

st.set_page_config(page_title="AgriLens AI", page_icon="🍃", layout="wide")

@st.cache_resource
def get_model():
    return CropDiseaseModel()

st.title("🍃 AgriLens AI — Crop Disease Prediction")
st.caption("Automated Plant Pathology & Crop Health Intelligence")

uploaded_file = st.file_uploader("Upload Crop Leaf Image", type=["jpg", "jpeg", "png"])
if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Leaf Preview", width=300)
    
    if st.button("Analyze Crop Health", type="primary"):
        with st.spinner("Executing MobileNetV2 inference..."):
            model = get_model()
            results = model.predict(image, top_k=3)
            top = results["top_prediction"]
            
            st.success(f"Predicted: {top['crop']} — {top['condition']} ({top['percentage']})")
            st.progress(float(top['score']))
            
            info = DISEASE_INFO.get(top['class_name'], {})
            st.markdown("### Symptoms")
            for s in info.get("symptoms", []):
                st.write(f"- {s}")
            st.markdown("### Treatment Guidance")
            for t in info.get("treatment", []):
                st.write(f"- {t}")`
    },
    'model.py': {
      desc: 'Preprocessing (224x224 RGB, [-1, 1] normalization) and MobileNetV2 inference engine.',
      snippet: `import json, os
from PIL import Image
import numpy as np

TARGET_IMAGE_SIZE = (224, 224)

def preprocess_image(image: Image.Image) -> np.ndarray:
    if image.mode != "RGB":
        image = image.convert("RGB")
    resized = image.resize(TARGET_IMAGE_SIZE, Image.Resampling.BILINEAR)
    img_array = np.array(resized, dtype=np.float32)
    normalized = (img_array / 127.5) - 1.0  # MobileNetV2 scaling
    return np.expand_dims(normalized, axis=0)

class CropDiseaseModel:
    def __init__(self, labels_path="labels.json"):
        with open(labels_path, "r") as f:
            self.labels = json.load(f)
        self.model = None  # Loaded via tf.keras.models.load_model`
    },
    'disease_info.py': {
      desc: '38-class PlantVillage botanical database of symptoms, pathogens, prevention, and treatments.',
      snippet: `DISEASE_INFO = {
    "Tomato___Early_blight": {
        "crop": "Tomato",
        "condition": "Early Blight",
        "is_healthy": False,
        "pathogen": "Alternaria solani / A. linariae (Fungus)",
        "symptoms": [
            "Concentric target-board rings on older lower leaves",
            "Chlorotic yellow halo encircling dark lesions",
            "Collar rot lesions on stems and fruit stem-ends"
        ],
        "prevention": [
            "Prune lowest 30-45 cm of foliage to avoid soil splash",
            "Apply mulch layer to halt soil-borne spore splashback",
            "Stake and cage vines for rapid canopy drying"
        ],
        "treatment": [
            "Apply protective fungicides (chlorothalonil, copper, mancozeb)",
            "Rotate with systemic fungicides (Quadris Top, Revus Top)"
        ]
    },
    # ... Complete 38 classes defined
}`
    },
    'requirements.txt': {
      desc: 'Pinned compatible dependencies for Streamlit Community Cloud and Python 3.10/3.11.',
      snippet: `streamlit>=1.36.0
pillow>=10.2.0
numpy>=1.24.3,<2.0.0
tensorflow-cpu>=2.15.0
pytest>=8.0.0`
    },
    'labels.json': {
      desc: 'Exact ordered list of all 38 output classes matching the trained neural model neurons.',
      snippet: `[
  "Apple___Apple_scab",
  "Apple___Black_rot",
  "Apple___Cedar_apple_rust",
  "Apple___healthy",
  "Blueberry___healthy",
  "Cherry_(including_sour)___Powdery_mildew",
  "Cherry_(including_sour)___healthy",
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
  "Corn_(maize)___Common_rust_",
  "Corn_(maize)___Northern_Leaf_Blight",
  "Corn_(maize)___healthy",
  "Grape___Black_rot",
  "Grape___Esca_(Black_Measles)",
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
  "Grape___healthy",
  "Orange___Haunglongbing_(Citrus_greening)",
  "Peach___Bacterial_spot",
  "Peach___healthy",
  "Pepper,_bell___Bacterial_spot",
  "Pepper,_bell___healthy",
  "Potato___Early_blight",
  "Potato___Late_blight",
  "Potato___healthy",
  "Raspberry___healthy",
  "Soybean___healthy",
  "Squash___Powdery_mildew",
  "Strawberry___Leaf_scorch",
  "Strawberry___healthy",
  "Tomato___Bacterial_spot",
  "Tomato___Early_blight",
  "Tomato___Late_blight",
  "Tomato___Leaf_Mold",
  "Tomato___Septoria_leaf_spot",
  "Tomato___Spider_mites Two-spotted_spider_mite",
  "Tomato___Target_Spot",
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
  "Tomato___Tomato_mosaic_virus",
  "Tomato___healthy"
]`
    },
    'train_model.py': {
      desc: 'Reproducible transfer learning script with data augmentation and model checkpointing.',
      snippet: `import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2

def build_model(num_classes=38):
    base_model = MobileNetV2(input_shape=(224, 224, 3), include_top=False, weights="imagenet")
    base_model.trainable = False
    
    inputs = tf.keras.Input(shape=(224, 224, 3))
    x = tf.keras.layers.Rescaling(scale=1./127.5, offset=-1)(inputs)
    x = base_model(x, training=False)
    x = tf.keras.layers.GlobalAveragePooling2D()(x)
    x = tf.keras.layers.Dropout(0.2)(x)
    outputs = tf.keras.layers.Dense(num_classes, activation="softmax")(x)
    return tf.keras.Model(inputs, outputs)`
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#146C43]/10 text-[#146C43] text-xs font-bold uppercase tracking-wider mb-2">
          <Code2 className="w-3.5 h-3.5" />
          <span>Python & Streamlit Source Code</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B2B21]">
          Standalone Python & Streamlit Codebase
        </h2>
        <p className="text-sm text-[#4A5D53] mt-1 max-w-3xl leading-relaxed">
          All Python source code files have been created in the project workspace (both in root and in <code className="bg-[#F7F8F2] px-1 py-0.5 rounded text-[#0B2B21] font-mono">crop-disease-prediction/</code>). 
          You can run them in VS Code or deploy directly to Streamlit Community Cloud.
        </p>
      </div>

      {/* PowerShell Instructions */}
      <div className="bg-[#0B2B21] text-white rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#35D07F]" />
            <h3 className="text-base font-bold font-display text-white">
              Windows PowerShell Commands (Local Run)
            </h3>
          </div>

          <button
            onClick={() => copyToClipboard(powershellCommands, 'ps')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#B9F6D0] border border-white/20 transition-all cursor-pointer self-start sm:self-auto"
          >
            {copiedKey === 'ps' ? <Check className="w-3.5 h-3.5 text-[#35D07F]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedKey === 'ps' ? 'Copied Commands!' : 'Copy PowerShell Commands'}</span>
          </button>
        </div>

        <pre className="p-4 bg-black/40 rounded-xl font-mono text-xs text-[#DDE7DE] overflow-x-auto leading-relaxed border border-white/10">
          {powershellCommands}
        </pre>
      </div>

      {/* GitHub & Streamlit Community Cloud Deployment Steps */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold font-display text-[#0B2B21]">
          <Cloud className="w-5 h-5 text-[#146C43]" />
          <span>Streamlit Community Cloud Deployment Guide</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#374151]">
          <div className="p-4 rounded-xl bg-[#F7F8F2] border border-[#DDE7DE] space-y-2">
            <div className="font-bold text-[#0B2B21] flex items-center justify-between">
              <span>Step 1: Push to GitHub</span>
              <button
                onClick={() => copyToClipboard(githubCommands, 'git')}
                className="text-[11px] text-[#146C43] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedKey === 'git' ? 'Copied!' : 'Copy Git Commands'}
              </button>
            </div>
            <p className="text-[#6B7280]">
              Create a new public repository on GitHub named <code>crop-disease-prediction</code>, then run the commands to push <code>app.py</code> and <code>requirements.txt</code> to the <code>main</code> branch.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F8F2] border border-[#DDE7DE] space-y-2">
            <div className="font-bold text-[#0B2B21]">
              <span>Step 2: Deploy on share.streamlit.io</span>
            </div>
            <p className="text-[#6B7280]">
              Log in to <strong>share.streamlit.io</strong> with GitHub, click <strong>"New app"</strong>, select your repo, set Main file path to <strong>app.py</strong>, and click <strong>Deploy</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Tabbed Code Inspector */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] overflow-hidden shadow-xs">
        
        {/* File Tabs Strip */}
        <div className="flex overflow-x-auto no-scrollbar bg-[#F7F8F2] border-b border-[#DDE7DE] px-4 pt-3 gap-1">
          {Object.keys(filesMap).map((fileName) => (
            <button
              key={fileName}
              onClick={() => setSelectedFile(fileName)}
              className={`px-4 py-2 rounded-t-xl text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                selectedFile === fileName
                  ? 'bg-white text-[#0B2B21] border-t-2 border-t-[#146C43] shadow-xs'
                  : 'text-[#6B7280] hover:text-[#0B2B21] hover:bg-white/50'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-[#146C43]" />
              <span>{fileName}</span>
            </button>
          ))}
        </div>

        {/* Code Content Box */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#4A5D53]">
              {filesMap[selectedFile]?.desc}
            </span>

            <button
              onClick={() => copyToClipboard(filesMap[selectedFile]?.snippet || '', selectedFile)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7F8F2] hover:bg-[#E5EBE5] text-xs font-semibold text-[#0B2B21] border border-[#DDE7DE] transition-colors cursor-pointer"
            >
              {copiedKey === selectedFile ? <Check className="w-3.5 h-3.5 text-[#146C43]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === selectedFile ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <pre className="p-4 bg-[#0B2B21] rounded-xl font-mono text-xs text-[#B9F6D0] overflow-x-auto max-h-[380px] leading-relaxed border border-[#0B2B21]">
            {filesMap[selectedFile]?.snippet}
          </pre>
        </div>

      </div>

    </div>
  );
};
