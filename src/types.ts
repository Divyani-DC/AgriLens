export interface DiseaseClassInfo {
  id: string; // e.g. "Tomato___Early_blight"
  crop: string;
  condition: string;
  isHealthy: boolean;
  scientificPathogen?: string;
  symptoms: string[];
  immediatePrecautions: string[];
  preventivePractices: string[];
  treatmentGuidance: string[];
  riskFactors?: string[];
  severityLevel: 'low' | 'moderate' | 'high' | 'critical' | 'none';
}

export interface PredictionCandidate {
  className: string;
  crop: string;
  condition: string;
  isHealthy: boolean;
  score: number; // probability between 0 and 1
  percentage: string;
}

export interface RegionOfInterest {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  radius: number; // percentage 0-100
  label: string;
  severity: 'mild' | 'moderate' | 'severe';
  observation: string;
}

export interface PredictionResult {
  topPrediction: PredictionCandidate;
  candidates: PredictionCandidate[];
  diseaseInfo: DiseaseClassInfo;
  analyzedAt: string;
  inferenceDurationMs: number;
  imageDimensions: { width: number; height: number };
  leafMetrics: {
    greenChlorophyllScore: number; // 0-100
    chlorosisYellowIndex: number;  // 0-100
    necroticTissueRatio: number;   // 0-100
    lesionSpotCount: number;
    tissueUniformity: number;      // 0-100
  };
  detectedRegions: RegionOfInterest[];
  scientificNotes?: string;
  isLikelyNonLeaf?: boolean;
}

export interface SampleImage {
  id: string;
  title: string;
  crop: string;
  condition: string;
  imageUrl: string;
  description: string;
  isHealthy: boolean;
}
