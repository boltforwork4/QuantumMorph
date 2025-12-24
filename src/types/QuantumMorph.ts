export interface PyrolysisStep {
  temperature: number;
  duration: number;
  atmosphere: string;
}

export interface ChemicalActivationStep {
  chemical: string;
  concentration: number;
  solutionVolume: number;
  acidMass: number;
  soakingTime: number;
}

export interface WashingStep {
  cycles: number;
  temperature: number;
}

export interface DryingStep {
  temperature: number;
  duration: number;
}

export interface ProcessPipeline {
  pyrolysis: PyrolysisStep;
  chemicalActivation: ChemicalActivationStep;
  washing: WashingStep;
  drying: DryingStep;
}

export interface MaterialInput {
  name: string;
  category: string;
  mass: number;
  moisture: number;
}

export interface CompositeComposition {
  biocharPercent: number;
  binderPercent: number;
  plasticizerPercent: number;
  biocharMass: number;
  binderMass: number;
  plasticizerMass: number;
}

export interface Performance {
  co2AdsorptionScore: number;
  confidence: number;
}

export interface RiskAssessment {
  overallRisk: string;
  riskLevel: number;
  mostSensitiveStep: string;
}

export interface QuantumMorphResult {
  overview: {
    title: string;
    confidence: number;
    structuralRegime: string;
  };
  materialInput: MaterialInput;
  processPipeline: ProcessPipeline;
  compositeFormation: CompositeComposition;
  performance: Performance;
  riskAssessment: RiskAssessment;
  interpretation: string;
}
