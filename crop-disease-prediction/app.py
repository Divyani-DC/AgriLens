"""
AgriLens AI — Crop Disease Prediction System
Streamlit Web Application for Automated Agricultural Pathology Diagnosis.
"""

import os
import streamlit as st
from PIL import Image
from model import CropDiseaseModel, TARGET_IMAGE_SIZE
from disease_info import DISEASE_INFO, DISCLAIMER_TEXT

# Configure Streamlit page layout and metadata
st.set_page_config(
    page_title="AgriLens AI — Crop Disease Prediction",
    page_icon="🍃",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Agricultural & MetaMask-Inspired CSS Styling
st.markdown("""
<style>
    :root {
        --forest-green: #0B2B21;
        --botanical-green: #146C43;
        --leaf-green: #35D07F;
        --mint-highlight: #B9F6D0;
        --warm-ivory: #F7F8F2;
        --text-charcoal: #17231D;
        --card-border: #DDE7DE;
    }
    
    .main {
        background-color: #F7F8F2;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }
    
    .brand-hero {
        background: linear-gradient(135deg, #0B2B21 0%, #146C43 100%);
        color: white;
        padding: 2.2rem 2.5rem;
        border-radius: 18px;
        margin-bottom: 2rem;
        box-shadow: 0 10px 25px -5px rgba(11, 43, 33, 0.25);
    }
    
    .brand-title {
        font-family: 'Manrope', sans-serif;
        font-size: 2.4rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin-bottom: 0.3rem;
        color: #FFFFFF;
    }
    
    .brand-tagline {
        font-size: 1.05rem;
        color: #B9F6D0;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }
    
    .stat-badge {
        display: inline-block;
        padding: 0.35rem 0.85rem;
        border-radius: 9999px;
        background-color: rgba(185, 246, 208, 0.15);
        color: #B9F6D0;
        font-size: 0.82rem;
        font-weight: 600;
        margin-right: 0.5rem;
        border: 1px solid rgba(185, 246, 208, 0.25);
    }
    
    .analysis-card {
        background: white;
        padding: 1.8rem;
        border-radius: 16px;
        border: 1px solid #DDE7DE;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        margin-bottom: 1.5rem;
    }
    
    .metric-value {
        font-family: 'JetBrains Mono', monospace;
        font-size: 2rem;
        font-weight: 700;
        color: #146C43;
    }
    
    .status-healthy {
        background-color: #ECFDF5;
        color: #047857;
        padding: 0.4rem 1rem;
        border-radius: 8px;
        font-weight: 700;
        display: inline-block;
        border: 1px solid #A7F3D0;
    }
    
    .status-diseased {
        background-color: #FFFBEB;
        color: #B45309;
        padding: 0.4rem 1rem;
        border-radius: 8px;
        font-weight: 700;
        display: inline-block;
        border: 1px solid #FDE68A;
    }
    
    .treatment-box {
        background: #F8FAF8;
        border-left: 4px solid #146C43;
        padding: 1rem 1.2rem;
        border-radius: 0 10px 10px 0;
        margin-top: 0.8rem;
    }
</style>
""", unsafe_allow_html=True)

# Cache the Machine Learning model instance across reruns
@st.cache_resource(show_spinner=False)
def get_model():
    """Instantiates and caches the crop disease prediction model."""
    return CropDiseaseModel()

# Sidebar branding & navigation
with st.sidebar:
    st.markdown("### 🍃 AgriLens AI")
    st.markdown("**Intelligent Crop Health & Disease Detection**")
    st.caption("Plant Pathology & Diagnostic Intelligence")
    st.markdown("---")
    
    nav_selection = st.radio(
        "Navigation",
        ["🔍 Disease Scanner", "📚 Disease Library (38 Classes)", "🔬 Model Architecture"],
        index=0
    )
    
    st.markdown("---")
    st.markdown("#### Model Specification")
    st.markdown("- **Architecture:** MobileNetV2")
    st.markdown("- **Dataset:** PlantVillage (54,305 images)")
    st.markdown("- **Classes:** 38 Crop-Disease Pairs")
    st.markdown("- **Input Shape:** (224, 224, 3)")
    st.markdown("- **Normalization:** [-1, 1]")
    
    st.markdown("---")
    st.caption("Automated Agricultural Computer Vision Platform.")

# ----------------- TAB 1: DISEASE SCANNER -----------------
if nav_selection == "🔍 Disease Scanner":
    # Hero Section
    st.markdown("""
    <div class="brand-hero">
        <div class="brand-title">AgriLens AI</div>
        <div class="brand-tagline">See the Disease. Understand the Evidence. Protect the Harvest.</div>
        <div>
            <span class="stat-badge">38 Supported Classes</span>
            <span class="stat-badge">MobileNetV2 Transfer Learning</span>
            <span class="stat-badge">Instant Pathology Analysis</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    col_left, col_right = st.columns([1, 1.2], gap="large")
    
    with col_left:
        st.markdown("### 1. Upload Crop Leaf Image")
        uploaded_file = st.file_uploader(
            "Choose a crop leaf image (JPG, JPEG, or PNG)",
            type=["jpg", "jpeg", "png"],
            help="Upload a clear photograph of an individual crop leaf for pathology assessment."
        )
        
        sample_choice = st.selectbox(
            "Or load a reference test specimen:",
            ["None", "Tomato Early Blight (Alternaria solani)", "Healthy Apple Leaf (Control)"]
        )
        
        image_to_analyze = None
        
        if uploaded_file is not None:
            try:
                image_to_analyze = Image.open(uploaded_file)
                st.image(image_to_analyze, caption="Uploaded Leaf Preview", use_column_width=True)
                st.caption(f"Dimensions: {image_to_analyze.width} × {image_to_analyze.height} px | Format: {image_to_analyze.format}")
            except Exception as e:
                st.error(f"Failed to open image file: {str(e)}")
        elif sample_choice != "None":
            # Generate synthetic test pattern if specimen chosen
            if "Early Blight" in sample_choice:
                # Synthetic specimen with dark spot
                img = Image.new("RGB", (224, 224), color=(60, 140, 60))
                # Add concentric lesion in center
                for y in range(80, 144):
                    for x in range(80, 144):
                        dist = ((x - 112)**2 + (y - 112)**2)**0.5
                        if dist < 18:
                            img.putpixel((x, y), (50, 30, 20))
                        elif dist < 26:
                            img.putpixel((x, y), (180, 160, 40))
                image_to_analyze = img
                st.image(image_to_analyze, caption="Reference Specimen: Tomato Early Blight", use_column_width=True)
            else:
                img = Image.new("RGB", (224, 224), color=(45, 155, 65))
                image_to_analyze = img
                st.image(image_to_analyze, caption="Reference Specimen: Healthy Apple Leaf", use_column_width=True)
        else:
            st.info("👈 Please select or drag a crop leaf image to begin analysis.")
            
        analyze_btn = st.button("🔬 Analyze Crop Health", type="primary", use_container_width=True, disabled=(image_to_analyze is None))
    
    with col_right:
        st.markdown("### 2. Diagnosis & Model Evidence")
        
        if analyze_btn and image_to_analyze is not None:
            with st.spinner("Executing MobileNetV2 neural inference & feature extraction..."):
                try:
                    model = get_model()
                    results = model.predict(image_to_analyze, top_k=3)
                    top_pred = results["top_prediction"]
                    disease_data = DISEASE_INFO.get(top_pred["class_name"], {
                        "crop": top_pred["crop"],
                        "condition": top_pred["condition"],
                        "is_healthy": top_pred["is_healthy"],
                        "pathogen": "Documented in local agricultural database",
                        "symptoms": ["Visible foliar discoloration or leaf spotting"],
                        "prevention": ["Practice crop rotation and ensure good drainage"],
                        "treatment": ["Consult local university agricultural extension"]
                    })
                    
                    # Result Display Card
                    status_class = "status-healthy" if top_pred["is_healthy"] else "status-diseased"
                    status_label = "HEALTHY CROP" if top_pred["is_healthy"] else "DISEASE DETECTED"
                    
                    st.markdown(f"""
                    <div class="analysis-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                            <span class="{status_class}">{status_label}</span>
                            <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; color: #4B5563;">
                                Top-1 Confidence: <strong>{top_pred['percentage']}</strong>
                            </span>
                        </div>
                        <h2 style="font-family: 'Manrope', sans-serif; color: #0B2B21; margin: 0.2rem 0;">{top_pred['crop']} — {top_pred['condition']}</h2>
                        <p style="color: #4B5563; font-size: 0.95rem; margin-top: 0.2rem;">
                            <strong>Biological Pathogen:</strong> {disease_data.get('pathogen', 'N/A')}
                        </p>
                    </div>
                    """, unsafe_allow_html=True)
                    
                    # Confidence meter bar
                    st.progress(float(top_pred["score"]))
                    
                    # Top 3 Candidates
                    st.markdown("#### Model Probability Distribution (Top 3 Ranked)")
                    for i, cand in enumerate(results["candidates"]):
                        c_col1, c_col2 = st.columns([3, 1])
                        c_col1.write(f"**{i+1}. {cand['crop']} — {cand['condition']}**")
                        c_col2.write(f"`{cand['percentage']}`")
                    
                    st.markdown("---")
                    
                    # Actionable agricultural recommendations
                    st.markdown("### 3. Preventive & Treatment Guidance")
                    t_tab1, t_tab2, t_tab3 = st.tabs(["📋 Symptoms", "🛡️ Prevention & Cultural Practices", "💊 Treatment Recommendations"])
                    
                    with t_tab1:
                        for s in disease_data.get("symptoms", []):
                            st.markdown(f"- {s}")
                    
                    with t_tab2:
                        for p in disease_data.get("prevention", []):
                            st.markdown(f"- {p}")
                            
                    with t_tab3:
                        for t in disease_data.get("treatment", []):
                            st.markdown(f"- {t}")
                    
                    st.markdown("---")
                    st.warning(f"⚠️ **Agricultural Notice:** {DISCLAIMER_TEXT}")
                    
                except Exception as ex:
                    st.error(f"Inference pipeline error: {str(ex)}")
        elif image_to_analyze is not None:
            st.info("Click **'Analyze Crop Health'** above to run the neural model.")
        else:
            st.markdown("""
            <div style="background: white; border: 2px dashed #DDE7DE; border-radius: 14px; padding: 3rem 2rem; text-align: center; color: #6B7280;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🍃</div>
                <div style="font-weight: 600; color: #17231D; margin-bottom: 0.3rem;">Awaiting Leaf Input</div>
                <div>Upload a crop leaf photograph on the left to inspect pathology and obtain diagnostic guidance.</div>
            </div>
            """, unsafe_allow_html=True)

# ----------------- TAB 2: DISEASE LIBRARY -----------------
elif nav_selection == "📚 Disease Library (38 Classes)":
    st.markdown("## 📚 Supported PlantVillage Disease Library")
    st.markdown("Browse all 38 verified crop-disease classes recognized by this system.")
    
    crops = sorted(list(set([info["crop"] for info in DISEASE_INFO.values()])))
    selected_crop = st.selectbox("Filter by Crop:", ["All Crops"] + crops)
    
    filtered_items = [
        (k, v) for k, v in DISEASE_INFO.items()
        if selected_crop == "All Crops" or v["crop"] == selected_crop
    ]
    
    st.write(f"Showing **{len(filtered_items)}** classes:")
    
    for class_id, info in filtered_items:
        with st.expander(f"{'✅' if info['is_healthy'] else '⚠️'} {info['crop']} — {info['condition']}"):
            st.markdown(f"**Pathogen:** `{info.get('pathogen', 'N/A')}`")
            st.markdown("**Key Symptoms:**")
            for s in info["symptoms"]:
                st.markdown(f"- {s}")
            st.markdown("**Preventive Measures:**")
            for p in info["prevention"]:
                st.markdown(f"- {p}")
            st.markdown("**Treatment Guidance:**")
            for t in info["treatment"]:
                st.markdown(f"- {t}")

# ----------------- TAB 3: MODEL ARCHITECTURE -----------------
elif nav_selection == "🔬 Model Architecture":
    st.markdown("## 🔬 Machine Learning Pipeline & Architecture")
    
    st.markdown("""
    ### 1. Model Overview: MobileNetV2
    This system implements **MobileNetV2** with Transfer Learning, optimized for high accuracy on mobile and cloud edge environments.
    
    - **Backbone:** MobileNetV2 pretrained on ImageNet (1.4M images)
    - **Core Innovation:** Inverted Residual Blocks with Linear Bottlenecks & Depthwise Separable Convolutions
    - **Computational Cost:** ~300M Multiply-Accumulates (MACs) vs ~4B for ResNet-50 (over 10x more efficient)
    - **Classification Head:** Global Average Pooling 2D $\\to$ Dropout (0.2) $\\to$ Dense(38, activation='softmax')
    
    ### 2. Preprocessing Pipeline
    Every input image undergoes standard mathematical transformations:
    1. **Color Normalization:** Conversion from any format (RGBA, Grayscale, CMYK) to standard 3-channel RGB.
    2. **Bilinear Resizing:** Scaled to target dimension $(224 \\times 224 \\times 3)$.
    3. **Floating Point Mapping:** Values mapped from $[0, 255]$ integer to $[-1.0, 1.0]$ float range:
       $$x_{\\text{norm}} = \\frac{x}{127.5} - 1.0$$
    4. **Batch Dimension Addition:** Shape expanded to $(1, 224, 224, 3)$.
    
    ### 3. PlantVillage Dataset Details
    - Total Images: 54,305 labeled leaf photographs
    - Supported Crops: 14 agricultural crops (Apple, Blueberry, Cherry, Corn, Grape, Orange, Peach, Pepper, Potato, Raspberry, Soybean, Squash, Strawberry, Tomato)
    - Split Ratio: 70% Training, 15% Validation, 15% Held-out Test
    """)

# Footer
st.markdown("---")
st.markdown(
    "<div style='text-align: center; color: #9CA3AF; font-size: 0.85rem; padding: 1rem;'>"
    "AgriLens AI · Automated Crop Disease Prediction · Built with Streamlit & MobileNetV2"
    "</div>",
    unsafe_allow_html=True
)
