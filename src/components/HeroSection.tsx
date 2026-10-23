import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { SAMPLE_LEAF_IMAGES } from '../data/plantVillageData';

interface HeroSectionProps {
  onScanClick: () => void;
  onSelectSample: (sample: typeof SAMPLE_LEAF_IMAGES[0]) => void;
  onExploreLibrary: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScanClick,
  onSelectSample,
  onExploreLibrary,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2B21] via-[#0F3529] to-[#0B2B21] text-white pt-8 pb-16 lg:py-16 border-b border-[#146C43]/40">
      
      {/* Background botanical grid elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#35D07F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#146C43]/60 border border-[#35D07F]/30 text-xs font-semibold tracking-wide text-[#B9F6D0]">
              <Sparkles className="w-3.5 h-3.5 text-[#35D07F]" />
              <span>INTELLIGENT CROP HEALTH PLATFORM</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12] text-balance">
              Every Leaf Tells a Story. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35D07F] via-[#B9F6D0] to-white">
                We Decode the Evidence.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#DDE7DE] max-w-2xl font-normal leading-relaxed">
              AgriLens AI performs genuine computer vision inference using MobileNetV2 transfer learning 
              trained on 54,305 PlantVillage specimens. Accurately diagnose foliar pathogens across 
              38 crop classes, detect necrotic lesions, and receive immediate agricultural treatment guidance.
            </p>

            {/* CTA Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScanClick}
                className="px-6 py-3.5 bg-[#35D07F] hover:bg-[#B9F6D0] text-[#0B2B21] font-bold rounded-xl transition-all duration-150 shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Analyze Crop Leaf</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreLibrary}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium rounded-xl transition-all duration-150 flex items-center gap-2 cursor-pointer"
              >
                <span>Browse 38 Diseases</span>
              </button>
            </div>

            {/* Quick-test specimen strip */}
            <div className="pt-4">
              <div className="text-xs uppercase tracking-wider text-[#A8B9AC] font-semibold mb-2.5">
                Load specimen for evaluation:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SAMPLE_LEAF_IMAGES.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => onSelectSample(sample)}
                    className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#35D07F]/40 rounded-xl text-left transition-all duration-150 flex items-center gap-2.5 group cursor-pointer"
                  >
                    <img
                      src={sample.imageUrl}
                      alt={sample.title}
                      className="w-11 h-11 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white group-hover:text-[#35D07F] truncate transition-colors">
                        {sample.title}
                      </div>
                      <div className="text-[10px] text-[#A8B9AC] truncate flex items-center gap-1">
                        {sample.isHealthy ? (
                          <span className="text-[#35D07F]">Healthy Control</span>
                        ) : (
                          <span className="text-amber-400">Pathogenic Spot</span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Proof Indicators */}
            <div className="pt-2 grid grid-cols-3 gap-4 border-t border-white/10 text-xs text-[#DDE7DE]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#35D07F] shrink-0" />
                <span>38 PlantVillage Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#35D07F] shrink-0" />
                <span>MobileNetV2 ~3.5M Params</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#35D07F] shrink-0" />
                <span>Verified Treatment Guides</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Leaf Visual & Telemetry Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#35D07F]/30 via-emerald-500/20 to-teal-500/30 blur-xl opacity-60" />

              {/* Main leaf frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#35D07F]/30 bg-[#0B2B21] shadow-2xl">
                <img
                  src="/src/assets/images/agrilens_hero_leaf_1792773563082.jpg"
                  alt="High resolution botanical leaf specimen"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                
                {/* Visual scan HUD overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B21] via-transparent to-transparent opacity-90" />

                {/* Floating Telemetry Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B2B21]/90 backdrop-blur-md border border-[#35D07F]/30 text-white shadow-lg space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#B9F6D0] uppercase tracking-wider text-[11px]">
                      Cellular Vein Inspection
                    </span>
                    <span className="font-mono text-[11px] text-[#A8B9AC]">
                      224 × 224 RGB
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10 text-center font-mono">
                    <div className="bg-white/5 rounded-lg p-1.5">
                      <div className="text-[10px] text-[#A8B9AC]">Chlorophyll</div>
                      <div className="text-sm font-bold text-[#35D07F]">94.8%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-1.5">
                      <div className="text-[10px] text-[#A8B9AC]">Necrosis</div>
                      <div className="text-sm font-bold text-slate-300">0.0%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-1.5">
                      <div className="text-[10px] text-[#A8B9AC]">Status</div>
                      <div className="text-xs font-bold text-[#35D07F] mt-0.5">HEALTHY</div>
                    </div>
                  </div>

                  <div className="text-[10px] text-[#A8B9AC] text-center pt-1">
                    Reference Specimen · Botanical Canopy Control
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
