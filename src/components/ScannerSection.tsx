import React, { useRef, useState } from 'react';
import { UploadCloud, Image as ImageIcon, X, RefreshCw, AlertCircle, Scan } from 'lucide-react';
import { SampleImage } from '../types';

interface ScannerSectionProps {
  selectedImageSrc: string | null;
  selectedFile: File | null;
  selectedSample: SampleImage | null;
  onImageSelect: (file: File) => void;
  onClear: () => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  analysisStep: string;
}

export const ScannerSection: React.FC<ScannerSectionProps> = ({
  selectedImageSrc,
  selectedFile,
  selectedSample,
  onImageSelect,
  onClear,
  onAnalyze,
  isAnalyzing,
  analysisStep,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndProcessFile(file);
    }
  };

  const validateAndProcessFile = (file: File) => {
    setValidationError(null);
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setValidationError('Please upload a valid image file (JPG, JPEG, PNG, or WebP).');
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      setValidationError('File size exceeds 15 MB limit. Please select a smaller photo.');
      return;
    }
    onImageSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndProcessFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <div id="scanner-section" className="scroll-mt-24 space-y-6">
      
      {/* Upload & Workspace Card */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 sm:p-8 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#DDE7DE]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0B2B21]">
              Leaf Analysis Workspace
            </h2>
            <p className="text-sm text-[#4A5D53] mt-0.5">
              Input a crop leaf photograph to execute MobileNetV2 inference
            </p>
          </div>

          {selectedImageSrc && (
            <button
              onClick={onClear}
              disabled={isAnalyzing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer self-start sm:self-auto disabled:opacity-50"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear & New Scan</span>
            </button>
          )}
        </div>

        {/* Validation error notice */}
        {validationError && (
          <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Content State: Either Upload Dropzone or Selected Leaf Preview */}
        {!selectedImageSrc ? (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-200 ${
              isDragOver
                ? 'border-[#35D07F] bg-[#B9F6D0]/10 scale-[1.005]'
                : 'border-[#A8B9AC]/60 hover:border-[#146C43] bg-[#F7F8F2]/60 hover:bg-[#F7F8F2]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/jpg,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="w-16 h-16 rounded-2xl bg-[#B9F6D0]/30 border border-[#35D07F]/40 flex items-center justify-center mx-auto mb-4 text-[#146C43]">
              <UploadCloud className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#0B2B21] mb-1">
              Start with a Leaf
            </h3>
            <p className="text-sm text-[#4A5D53] max-w-md mx-auto mb-5 leading-relaxed">
              Drag and drop an image of an individual crop leaf, or click to browse files from your computer or camera.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#146C43] hover:bg-[#0B2B21] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Choose Leaf Image</span>
            </button>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[#6B7280]">
              <span>JPG, JPEG, PNG, WEBP</span>
              <span>·</span>
              <span>Max 15 MB</span>
              <span>·</span>
              <span>RGB Normalization</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Image preview with scan overlay */}
            <div className="md:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#DDE7DE] bg-black/5 shadow-inner aspect-4/3 max-h-[380px] flex items-center justify-center">
                <img
                  src={selectedImageSrc}
                  alt="Crop leaf preview"
                  className="w-full h-full object-contain"
                />

                {/* Radar scanning line when inference is running */}
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-[#0B2B21]/30 backdrop-blur-[1px] flex flex-col justify-between overflow-hidden">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#35D07F] to-transparent shadow-[0_0_12px_#35D07F] animate-bounce" />
                    <div className="p-4 text-center">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2B21]/80 border border-[#35D07F]/40 text-[#B9F6D0] text-xs font-mono">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#35D07F]" />
                        <span>{analysisStep}</span>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#35D07F] to-transparent shadow-[0_0_12px_#35D07F]" />
                  </div>
                )}
              </div>

              {/* Specimen or file information */}
              <div className="mt-2.5 flex items-center justify-between text-xs text-[#6B7280] font-mono">
                <span>{selectedFile ? selectedFile.name : selectedSample?.title}</span>
                <span>{selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB` : 'Reference Specimen'}</span>
              </div>
            </div>

            {/* Right: Inspection details & Trigger Button */}
            <div className="md:col-span-6 space-y-5">
              <div className="p-4 rounded-xl bg-[#F7F8F2] border border-[#DDE7DE] space-y-2">
                <div className="text-xs font-bold text-[#146C43] uppercase tracking-wider">
                  Preprocessing Pipeline Ready
                </div>
                <div className="text-xs text-[#4A5D53] leading-relaxed">
                  The selected image will be converted to 3-channel RGB, resized to <code className="font-mono bg-white px-1 py-0.5 rounded border border-[#DDE7DE]">224 × 224</code>, normalized to <code className="font-mono bg-white px-1 py-0.5 rounded border border-[#DDE7DE]">[-1.0, 1.0]</code>, and evaluated across all 38 PlantVillage output neurons.
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <button
                  onClick={onAnalyze}
                  disabled={isAnalyzing}
                  className="w-full py-4 rounded-xl bg-[#146C43] hover:bg-[#0B2B21] text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#35D07F]" />
                      <span>Running Neural Inference...</span>
                    </>
                  ) : (
                    <>
                      <Scan className="w-4 h-4 text-[#35D07F]" />
                      <span>Analyze Crop Health</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280]">
                  <span>Genuine MobileNetV2 Output</span>
                  <span>·</span>
                  <span>Calibrated Softmax Probabilities</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};
