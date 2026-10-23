import React, { useState } from 'react';
import { Search, BookOpen, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { DISEASE_DATABASE } from '../data/plantVillageData';
import { DiseaseClassInfo } from '../types';

interface DiseaseLibraryProps {
  onSelectForTest?: (diseaseId: string) => void;
}

export const DiseaseLibrary: React.FC<DiseaseLibraryProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('Tomato___Early_blight');

  const allDiseases = Object.values(DISEASE_DATABASE);

  // Extract unique crop categories
  const crops = ['All', ...Array.from(new Set(allDiseases.map(d => d.crop))).sort()];

  const filteredDiseases = allDiseases.filter(item => {
    const matchesCrop = selectedCrop === 'All' || item.crop === selectedCrop;
    const matchesSearch = 
      item.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.scientificPathogen && item.scientificPathogen.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCrop && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-[#DDE7DE] p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#146C43]/10 text-[#146C43] text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PlantVillage Benchmark</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B2B21]">
            Supported Crop & Disease Library
          </h2>
          <p className="text-sm text-[#4A5D53] mt-1 leading-relaxed">
            Browse the comprehensive directory of 38 botanical conditions supported by this model. 
            Each category features verified symptoms, underlying pathogens, and agronomic management practices.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-4 border-t border-[#DDE7DE]">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#A8B9AC] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by disease or crop (e.g., Blight, Scab, Tomato)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDE7DE] bg-[#F7F8F2] text-xs focus:bg-white transition-colors placeholder:text-[#A8B9AC]"
            />
          </div>

          <div className="text-xs font-mono text-[#6B7280]">
            Showing <strong className="text-[#0B2B21]">{filteredDiseases.length}</strong> of 38 classes
          </div>

        </div>

        {/* Crop Pills Strip */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {crops.map((crop) => (
            <button
              key={crop}
              onClick={() => setSelectedCrop(crop)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCrop === crop
                  ? 'bg-[#146C43] text-white shadow-xs'
                  : 'bg-[#F7F8F2] text-[#4A5D53] hover:bg-[#E5EBE5]'
              }`}
            >
              {crop}
            </button>
          ))}
        </div>

      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDiseases.map((disease) => {
          const isExpanded = expandedId === disease.id;
          return (
            <div
              key={disease.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded ? 'border-[#146C43] shadow-sm' : 'border-[#DDE7DE] hover:border-[#A8B9AC]'
              }`}
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : disease.id)}
                className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-[#146C43]">
                      {disease.crop}
                    </span>
                    <span className="text-[#A8B9AC]">·</span>
                    <span className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded ${
                      disease.isHealthy
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {disease.isHealthy ? 'Healthy Control' : 'Pathogenic Disease'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B2B21] font-display">
                    {disease.condition}
                  </h3>

                  {disease.scientificPathogen && (
                    <div className="text-xs text-[#6B7280] italic">
                      {disease.scientificPathogen}
                    </div>
                  )}
                </div>

                <div className={`p-1.5 rounded-lg text-xs font-bold transition-transform ${
                  isExpanded ? 'rotate-180 bg-[#F7F8F2] text-[#0B2B21]' : 'text-[#6B7280]'
                }`}>
                  ▼
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-[#DDE7DE] bg-[#F7F8F2]/60 space-y-4 text-xs">
                  
                  {/* Symptoms */}
                  <div>
                    <div className="font-bold text-[#0B2B21] uppercase tracking-wider text-[11px] mb-1.5">
                      Foliar Symptoms
                    </div>
                    <ul className="space-y-1 text-[#374151]">
                      {disease.symptoms.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#146C43] mt-1.5 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention */}
                  <div>
                    <div className="font-bold text-[#0B2B21] uppercase tracking-wider text-[11px] mb-1.5">
                      Preventive & Cultural Measures
                    </div>
                    <ul className="space-y-1 text-[#374151]">
                      {disease.preventivePractices.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#146C43] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment */}
                  <div>
                    <div className="font-bold text-[#0B2B21] uppercase tracking-wider text-[11px] mb-1.5">
                      Agronomic Treatment Guidance
                    </div>
                    <ul className="space-y-1 text-[#374151]">
                      {disease.treatmentGuidance.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
