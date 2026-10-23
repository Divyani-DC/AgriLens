import React from 'react';
import { Cpu, Layers, GitBranch, ArrowDown, Check, Zap } from 'lucide-react';

export const ArchitectureView: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Overview Banner */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#146C43]/10 text-[#146C43] text-xs font-bold uppercase tracking-wider mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Deep Learning Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B2B21]">
          MobileNetV2 Transfer Learning Pipeline
        </h2>
        <p className="text-sm text-[#4A5D53] mt-1 max-w-3xl leading-relaxed">
          Detailed mathematical formulation, neural topology, and engineering justification for 
          selecting MobileNetV2 for edge and cloud crop pathology diagnosis.
        </p>
      </div>

      {/* Model Comparison Table */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-bold font-display text-[#0B2B21] flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#146C43]" />
          <span>Model Architecture Comparison (Why MobileNetV2?)</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#DDE7DE] bg-[#F7F8F2] text-[#0B2B21] font-mono">
                <th className="p-3">Model Architecture</th>
                <th className="p-3">Parameters (M)</th>
                <th className="p-3">FLOPs / MACs</th>
                <th className="p-3">Inference Speed (CPU)</th>
                <th className="p-3">Streamlit Cloud Suitability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE7DE] text-[#374151]">
              <tr className="bg-emerald-50/60 font-medium">
                <td className="p-3 font-bold text-[#146C43] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#146C43]" />
                  <span>MobileNetV2 (Selected)</span>
                </td>
                <td className="p-3 font-mono font-bold text-[#146C43]">~3.5 M</td>
                <td className="p-3 font-mono font-bold text-[#146C43]">300 M MACs</td>
                <td className="p-3 font-mono">~180 ms</td>
                <td className="p-3 text-emerald-700 font-semibold">Optimal (Low RAM)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">ResNet-50</td>
                <td className="p-3 font-mono text-[#6B7280]">25.6 M</td>
                <td className="p-3 font-mono text-[#6B7280]">4.1 B MACs</td>
                <td className="p-3 font-mono">~950 ms</td>
                <td className="p-3 text-amber-700">Moderate Memory Footprint</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">VGG-16</td>
                <td className="p-3 font-mono text-[#6B7280]">138.4 M</td>
                <td className="p-3 font-mono text-[#6B7280]">15.3 B MACs</td>
                <td className="p-3 font-mono">~2,400 ms</td>
                <td className="p-3 text-rose-700">Poor (Exceeds Cloud RAM)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Depthwise Separable Convolution Mathematical Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-3">
          <div className="text-xs font-bold text-[#146C43] uppercase tracking-wider font-mono">
            Core Mathematical Principle
          </div>
          <h4 className="text-base font-bold text-[#0B2B21] font-display">
            Depthwise Separable Convolutions
          </h4>
          <p className="text-xs text-[#4A5D53] leading-relaxed">
            Standard 2D convolution filters across space and channels simultaneously. 
            MobileNetV2 splits the operation into two distinct stages:
          </p>

          <div className="space-y-2 p-3 bg-[#F7F8F2] rounded-xl font-mono text-[11px] text-[#17231D]">
            <div>1. <strong>Depthwise Conv (3×3):</strong> Applies a single spatial filter per input channel.</div>
            <div>2. <strong>Pointwise Conv (1×1):</strong> Mixes linear combinations of channels.</div>
          </div>

          <div className="p-3 bg-[#0B2B21] text-[#B9F6D0] rounded-xl font-mono text-xs space-y-1">
            <div className="text-[10px] text-[#A8B9AC]">Computational Reduction Ratio:</div>
            <div className="text-sm font-bold text-white">
              Cost Ratio ≈ 1/N + 1/D_k² ≈ 1/9 (88% reduction in operations)
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-3">
          <div className="text-xs font-bold text-[#146C43] uppercase tracking-wider font-mono">
            Transfer Learning Strategy
          </div>
          <h4 className="text-base font-bold text-[#0B2B21] font-display">
            Two-Phase Fine-Tuning Strategy
          </h4>
          <p className="text-xs text-[#4A5D53] leading-relaxed">
            Transfer learning allows convergence in fewer epochs while preventing catastrophic forgetting of learned ImageNet features:
          </p>

          <div className="space-y-2 text-xs text-[#374151]">
            <div className="p-2.5 rounded-lg border border-[#DDE7DE] bg-[#F7F8F2]">
              <strong>Phase 1: Feature Freezing</strong>
              <div className="text-[11px] text-[#6B7280]">
                Freeze base weights, train newly appended dense classification head (learning rate: 1e-3).
              </div>
            </div>
            <div className="p-2.5 rounded-lg border border-[#DDE7DE] bg-[#F7F8F2]">
              <strong>Phase 2: Deep Fine-Tuning</strong>
              <div className="text-[11px] text-[#6B7280]">
                Unfreeze top 30 layers, train with reduced learning rate (1e-5) to adapt specialized agricultural textures.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Layer by Layer Pipeline Diagram */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 shadow-xs space-y-4">
        <h4 className="text-base font-bold text-[#0B2B21] font-display">
          End-to-End Layer Pipeline Flow
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          
          <div className="p-3 bg-[#F7F8F2] rounded-xl border border-[#DDE7DE] space-y-1">
            <div className="text-[10px] font-mono text-[#6B7280]">Input Tensor</div>
            <div className="text-xs font-bold text-[#0B2B21]">Raw Photograph</div>
            <div className="text-[10px] font-mono text-[#146C43]">(224, 224, 3) RGB</div>
          </div>

          <div className="p-3 bg-[#F7F8F2] rounded-xl border border-[#DDE7DE] space-y-1">
            <div className="text-[10px] font-mono text-[#6B7280]">Preprocessing</div>
            <div className="text-xs font-bold text-[#0B2B21]">Rescale / Shift</div>
            <div className="text-[10px] font-mono text-[#146C43]">x/127.5 - 1.0</div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <div className="text-[10px] font-mono text-emerald-800 font-semibold">Backbone</div>
            <div className="text-xs font-bold text-emerald-950">MobileNetV2</div>
            <div className="text-[10px] font-mono text-emerald-700">17 Inverted Blocks</div>
          </div>

          <div className="p-3 bg-[#F7F8F2] rounded-xl border border-[#DDE7DE] space-y-1">
            <div className="text-[10px] font-mono text-[#6B7280]">Head Pool</div>
            <div className="text-xs font-bold text-[#0B2B21]">Global Avg Pool 2D</div>
            <div className="text-[10px] font-mono text-[#146C43]">Dropout (0.2)</div>
          </div>

          <div className="p-3 bg-[#0B2B21] text-white rounded-xl border border-[#0B2B21] space-y-1">
            <div className="text-[10px] font-mono text-[#B9F6D0]">Softmax</div>
            <div className="text-xs font-bold text-white">Dense Layer</div>
            <div className="text-[10px] font-mono text-[#35D07F]">38 Probabilities</div>
          </div>

        </div>
      </div>

    </div>
  );
};
