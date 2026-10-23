import React from 'react';
import { Leaf, BookOpen, Cpu, Code2 } from 'lucide-react';

interface NavbarProps {
  activeTab: 'scanner' | 'library' | 'architecture' | 'codebase';
  setActiveTab: (tab: 'scanner' | 'library' | 'architecture' | 'codebase') => void;
  onScanClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onScanClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B2B21]/95 backdrop-blur-md border-b border-[#146C43]/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark with botanical insignia */}
        <div 
          onClick={() => setActiveTab('scanner')}
          className="flex items-center gap-3 cursor-pointer select-none shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#35D07F] to-[#146C43] p-0.5 shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0B2B21] rounded-[10px] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#35D07F]" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-1.5">
              <span>AgriLens</span>
              <span className="text-[#35D07F] font-semibold text-sm">AI</span>
            </div>
            <div className="text-[10px] text-[#A8B9AC] font-medium tracking-wide">
              Plant Pathology Intelligence
            </div>
          </div>
        </div>

        {/* Zone 2: 4 Concise Single-line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => setActiveTab('scanner')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeTab === 'scanner'
                ? 'bg-[#146C43] text-white shadow-xs'
                : 'text-[#A8B9AC] hover:text-white hover:bg-white/5'
            }`}
          >
            Disease Scanner
          </button>

          <button
            onClick={() => setActiveTab('library')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'library'
                ? 'bg-[#146C43] text-white shadow-xs'
                : 'text-[#A8B9AC] hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>38-Class Library</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-[#146C43] text-white shadow-xs'
                : 'text-[#A8B9AC] hover:text-white hover:bg-white/5'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Model Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('codebase')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'codebase'
                ? 'bg-[#146C43] text-white shadow-xs'
                : 'text-[#A8B9AC] hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Python & Streamlit</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onScanClick}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B2B21] bg-[#35D07F] hover:bg-[#B9F6D0] active:scale-95 rounded-xl transition-all duration-150 shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>Analyze Leaf</span>
          </button>
        </div>

      </div>

      {/* Mobile nav drawer strip */}
      <div className="lg:hidden flex overflow-x-auto no-scrollbar px-4 py-2 gap-2 border-t border-[#146C43]/30 bg-[#0B2B21]">
        <button
          onClick={() => setActiveTab('scanner')}
          className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shrink-0 ${
            activeTab === 'scanner' ? 'bg-[#146C43] text-white' : 'text-[#A8B9AC]'
          }`}
        >
          Scanner
        </button>
        <button
          onClick={() => setActiveTab('library')}
          className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shrink-0 ${
            activeTab === 'library' ? 'bg-[#146C43] text-white' : 'text-[#A8B9AC]'
          }`}
        >
          Library (38)
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shrink-0 ${
            activeTab === 'architecture' ? 'bg-[#146C43] text-white' : 'text-[#A8B9AC]'
          }`}
        >
          Architecture
        </button>
        <button
          onClick={() => setActiveTab('codebase')}
          className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shrink-0 ${
            activeTab === 'codebase' ? 'bg-[#146C43] text-white' : 'text-[#A8B9AC]'
          }`}
        >
          Streamlit Code
        </button>
      </div>
    </header>
  );
};
