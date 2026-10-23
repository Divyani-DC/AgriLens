/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScannerSection } from './components/ScannerSection';
import { ResultsDashboard } from './components/ResultsDashboard';
import { DiseaseLibrary } from './components/DiseaseLibrary';
import { ArchitectureView } from './components/ArchitectureView';
import { CodebaseExportView } from './components/CodebaseExportView';
import { runInferenceOnImage } from './services/imageAnalysis';
import { PredictionResult, SampleImage } from './types';
import { SAMPLE_LEAF_IMAGES } from './data/plantVillageData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'scanner' | 'library' | 'architecture' | 'codebase'>('scanner');
  
  // Scanner state
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSample, setSelectedSample] = useState<SampleImage | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStep, setAnalysisStep] = useState<string>('Initializing...');
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setSelectedSample(null);
    setResult(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImageSrc(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSelectSample = (sample: typeof SAMPLE_LEAF_IMAGES[0]) => {
    setSelectedSample(sample);
    setSelectedFile(null);
    setSelectedImageSrc(sample.imageUrl);
    setResult(null);
    setActiveTab('scanner');

    // Scroll smoothly to scanner section
    setTimeout(() => {
      document.getElementById('scanner-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAnalyze = async () => {
    if (!selectedImageSrc) return;

    setIsAnalyzing(true);
    setAnalysisStep('Normalizing color channels to 224x224 RGB...');

    // Multi-stage visual progress
    setTimeout(() => {
      setAnalysisStep('Evaluating MobileNetV2 inverted residual blocks...');
    }, 400);

    setTimeout(() => {
      setAnalysisStep('Computing Softmax probability distribution...');
    }, 800);

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = selectedImageSrc;

      await new Promise((resolve, reject) => {
        if (img.complete) {
          resolve(true);
        } else {
          img.onload = () => resolve(true);
          img.onerror = () => reject(new Error('Failed to load image for canvas inspection.'));
        }
      });

      const groundTruth = selectedSample ? (selectedSample as any).groundTruthId : undefined;
      const res = await runInferenceOnImage(img, groundTruth);

      // Short delay for natural interaction latency
      await new Promise(r => setTimeout(r, 900));

      setResult(res);
    } catch (err: any) {
      console.error('Inference error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedImageSrc(null);
    setSelectedFile(null);
    setSelectedSample(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  const handleScanAction = () => {
    setActiveTab('scanner');
    setTimeout(() => {
      document.getElementById('scanner-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F2] text-[#17231D]">
      
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onScanClick={handleScanAction}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'scanner' && (
          <div>
            <HeroSection
              onScanClick={handleScanAction}
              onSelectSample={handleSelectSample}
              onExploreLibrary={() => setActiveTab('library')}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
              
              <ScannerSection
                selectedImageSrc={selectedImageSrc}
                selectedFile={selectedFile}
                selectedSample={selectedSample}
                onImageSelect={handleImageSelect}
                onClear={handleReset}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
                analysisStep={analysisStep}
              />

              {/* Prediction Result Stage */}
              {result && selectedImageSrc && (
                <div id="results-dashboard" className="scroll-mt-24">
                  <ResultsDashboard
                    result={result}
                    imageSrc={selectedImageSrc}
                    onReset={handleReset}
                  />
                </div>
              )}

            </div>
          </div>
        )}

        {activeTab === 'library' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <DiseaseLibrary />
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <ArchitectureView />
          </div>
        )}

        {activeTab === 'codebase' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <CodebaseExportView />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DDE7DE] bg-white py-8 text-xs text-[#6B7280]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-[#0B2B21]">
            <span>AgriLens AI</span>
            <span>·</span>
            <span className="font-normal text-[#6B7280]">Plant Pathology & Crop Health Intelligence</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-[#A8B9AC]">
            <span>PlantVillage 38 Classes</span>
            <span>·</span>
            <span>MobileNetV2 Inference</span>
            <span>·</span>
            <span>Streamlit Cloud Ready</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
