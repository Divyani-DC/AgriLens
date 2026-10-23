import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Info, 
  MapPin, 
  RotateCcw, 
  Activity,
  Layers,
  FileText
} from 'lucide-react';
import { PredictionResult, RegionOfInterest } from '../types';

interface ResultsDashboardProps {
  result: PredictionResult;
  imageSrc: string;
  onReset: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  result,
  imageSrc,
  onReset,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionOfInterest | null>(
    result.detectedRegions[0] || null
  );
  const [activeTab, setActiveTab] = useState<'symptoms' | 'prevention' | 'treatment'>('symptoms');

  const { topPrediction, candidates, diseaseInfo, leafMetrics } = result;
  const isHealthy = topPrediction.isHealthy;
  const confidencePercent = Math.round(topPrediction.score * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Header Banner & Status Block */}
      <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
        isHealthy 
          ? 'bg-gradient-to-br from-emerald-900/90 to-[#0B2B21] border-emerald-500/30 text-white' 
          : 'bg-gradient-to-br from-[#17231D] to-[#0B2B21] border-[#146C43]/50 text-white'
      } shadow-md`}>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-3">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-xs"
              style={{
                backgroundColor: isHealthy ? 'rgba(53, 208, 127, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                color: isHealthy ? '#B9F6D0' : '#FDE68A',
                borderColor: isHealthy ? 'rgba(53, 208, 127, 0.4)' : 'rgba(245, 158, 11, 0.4)'
              }}
            >
              {isHealthy ? <CheckCircle2 className="w-3.5 h-3.5 text-[#35D07F]" /> : <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />}
              <span>{isHealthy ? 'Healthy Specimen Verified' : 'Pathogenic Disease Detected'}</span>
            </div>

            {/* Disease and Crop Title */}
            <div>
              <div className="text-sm font-mono text-[#A8B9AC] uppercase tracking-wider">
                Predicted Classification
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mt-1">
                {topPrediction.crop} — {topPrediction.condition}
              </h1>
            </div>

            {/* Scientific Pathogen */}
            {diseaseInfo.scientificPathogen && (
              <div className="text-sm text-[#DDE7DE] flex items-center gap-2">
                <span className="text-[#A8B9AC]">Biological Agent:</span>
                <span className="italic font-medium text-[#B9F6D0]">{diseaseInfo.scientificPathogen}</span>
              </div>
            )}
          </div>

          {/* Right: Semicircular / Gauge Confidence Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[240px] text-center backdrop-blur-xs flex flex-col justify-center items-center">
            <div className="text-xs uppercase tracking-wider text-[#A8B9AC] font-semibold mb-1">
              Model Diagnostic Confidence
            </div>
            
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#35D07F] tracking-tight tabular-nums my-1">
              {topPrediction.percentage}
            </div>

            {/* Visual Gauge Bar */}
            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mt-2 border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-[#35D07F] rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, confidencePercent)}%` }}
              />
            </div>

            <div className="text-[11px] text-[#A8B9AC] mt-2 font-mono">
              Inference latency: {result.inferenceDurationMs} ms · Softmax calibrated
            </div>
          </div>

        </div>

      </div>

      {/* 2. Two-Column Diagnostic Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (5 Cols): Interactive Leaf Pathology Visualizer */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-[#DDE7DE] p-5 shadow-xs space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold font-display text-[#0B2B21]">
                <Activity className="w-4 h-4 text-[#146C43]" />
                <span>Pathology Region Inspector</span>
              </div>
              <span className="text-xs font-mono text-[#6B7280]">
                {result.imageDimensions.width} × {result.imageDimensions.height} px
              </span>
            </div>

            {/* Image Canvas with Clickable Pathology Markers */}
            <div className="relative rounded-xl overflow-hidden bg-black/5 border border-[#DDE7DE] aspect-square flex items-center justify-center">
              <img
                src={imageSrc}
                alt="Analyzed leaf specimen"
                className="w-full h-full object-contain"
              />

              {/* Pin Hotspots */}
              {result.detectedRegions.map((region) => {
                const isSelected = selectedRegion?.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    style={{ left: `${region.x}%`, top: `${region.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'w-7 h-7 bg-[#35D07F] text-[#0B2B21] border-2 border-white shadow-lg ring-4 ring-[#35D07F]/40'
                        : isHealthy
                        ? 'w-5 h-5 bg-emerald-600/90 text-white border border-white hover:scale-125'
                        : 'w-5 h-5 bg-amber-500/90 text-white border border-white hover:scale-125'
                    } flex items-center justify-center text-[10px] font-bold`}
                    title={region.label}
                  >
                    <MapPin className="w-3 h-3" />
                  </button>
                );
              })}
            </div>

            {/* Selected Hotspot Observation Card */}
            {selectedRegion && (
              <div className="p-3.5 bg-[#F7F8F2] rounded-xl border border-[#DDE7DE] text-xs space-y-1">
                <div className="flex items-center justify-between font-semibold text-[#0B2B21]">
                  <span>{selectedRegion.label}</span>
                  <span className={`uppercase font-mono text-[10px] px-1.5 py-0.5 rounded ${
                    selectedRegion.severity === 'severe'
                      ? 'bg-rose-100 text-rose-800'
                      : selectedRegion.severity === 'moderate'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {selectedRegion.severity}
                  </span>
                </div>
                <p className="text-[#4A5D53] leading-relaxed">
                  {selectedRegion.observation}
                </p>
              </div>
            )}

            {/* Extracted Computer Vision Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#F7F8F2] border border-[#DDE7DE]">
                <div className="text-[#6B7280] text-[10px] uppercase">Chlorophyll Score</div>
                <div className="font-bold text-[#146C43] text-sm tabular-nums">
                  {leafMetrics.greenChlorophyllScore}%
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F7F8F2] border border-[#DDE7DE]">
                <div className="text-[#6B7280] text-[10px] uppercase">Necrotic Ratio</div>
                <div className="font-bold text-amber-800 text-sm tabular-nums">
                  {leafMetrics.necroticTissueRatio}%
                </div>
              </div>
            </div>

          </div>

          {/* Reset / Scan Another Leaf Button */}
          <button
            onClick={onReset}
            className="w-full py-3 rounded-xl bg-white hover:bg-[#F7F8F2] text-[#0B2B21] border border-[#DDE7DE] hover:border-[#146C43] font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#146C43]" />
            <span>Clear and Analyze Another Image</span>
          </button>
        </div>

        {/* Right Column (7 Cols): Probabilities Distribution & Treatment Guidance */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top-3 Model Distribution */}
          <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold font-display text-[#0B2B21]">
                <Layers className="w-4 h-4 text-[#146C43]" />
                <span>Top Predicted Candidates (Softmax Distribution)</span>
              </div>
              <span className="text-xs text-[#6B7280] font-mono">38-Class Vector</span>
            </div>

            <div className="space-y-3">
              {candidates.map((cand, idx) => (
                <div key={cand.className} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#17231D] flex items-center gap-1.5">
                      <span className="font-mono text-[#6B7280]">#{idx + 1}</span>
                      <span>{cand.crop} — {cand.condition}</span>
                    </span>
                    <span className="font-mono font-bold text-[#146C43] tabular-nums">
                      {cand.percentage}
                    </span>
                  </div>
                  <div className="w-full bg-[#E5EBE5] h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        idx === 0 ? 'bg-[#146C43]' : 'bg-[#A8B9AC]'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(3, cand.score * 100))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-[#6B7280] pt-1">
              Note: Model score reflects calibrated class probability across PlantVillage categories and is not guaranteed commercial clinical certainty.
            </div>
          </div>

          {/* Actionable Guidance Tabs */}
          <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#DDE7DE]">
              <div className="flex items-center gap-2 text-sm font-bold font-display text-[#0B2B21]">
                <FileText className="w-4 h-4 text-[#146C43]" />
                <span>Agricultural Diagnostic Guidance</span>
              </div>

              {/* Segmented Tab Controls */}
              <div className="flex items-center gap-1 p-1 bg-[#F7F8F2] rounded-lg border border-[#DDE7DE]">
                <button
                  onClick={() => setActiveTab('symptoms')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'symptoms'
                      ? 'bg-white text-[#0B2B21] shadow-xs'
                      : 'text-[#6B7280] hover:text-[#0B2B21]'
                  }`}
                >
                  Symptoms
                </button>
                <button
                  onClick={() => setActiveTab('prevention')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'prevention'
                      ? 'bg-white text-[#0B2B21] shadow-xs'
                      : 'text-[#6B7280] hover:text-[#0B2B21]'
                  }`}
                >
                  Prevention
                </button>
                <button
                  onClick={() => setActiveTab('treatment')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'treatment'
                      ? 'bg-white text-[#0B2B21] shadow-xs'
                      : 'text-[#6B7280] hover:text-[#0B2B21]'
                  }`}
                >
                  Treatment
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            {activeTab === 'symptoms' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#146C43] uppercase tracking-wider">
                  Characteristic Pathological Signs
                </div>
                <ul className="space-y-2">
                  {diseaseInfo.symptoms.map((symptom, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#374151] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#146C43] mt-2 shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'prevention' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#146C43] uppercase tracking-wider">
                  Cultural Practices & Field Hygiene
                </div>
                <ul className="space-y-2">
                  {diseaseInfo.preventivePractices.map((prev, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#374151] flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#146C43] mt-0.5 shrink-0" />
                      <span>{prev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'treatment' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#146C43] uppercase tracking-wider">
                  Verified Agronomic Management Guidance
                </div>
                <ul className="space-y-2">
                  {diseaseInfo.treatmentGuidance.map((treatment, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#374151] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Immediate precautions callout box */}
            {diseaseInfo.immediatePrecautions && diseaseInfo.immediatePrecautions.length > 0 && (
              <div className="p-4 bg-[#F8FAF8] rounded-xl border-l-3 border-[#146C43] space-y-1.5">
                <div className="text-xs font-bold text-[#0B2B21] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#146C43]" />
                  <span>Immediate Actionable Precautions</span>
                </div>
                <ul className="space-y-1">
                  {diseaseInfo.immediatePrecautions.map((prec, i) => (
                    <li key={i} className="text-xs text-[#4A5D53]">
                      · {prec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Agricultural Diagnostic Advisory */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Diagnostic Advisory:</strong> This platform provides machine learning-based foliar predictions for preliminary agricultural screening. Predictions should be confirmed with certified agricultural extension specialists or plant pathologists before applying specialized treatments.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
