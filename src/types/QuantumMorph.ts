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

export interface APIQuantumMorphResult {
  status: string;
  material: {
    category: string;
    name: string;
    input_mass_g: number;
    moisture: number;
  };
  process_plan: {
    pyrolysis: {
      temperature_celsius: number;
      duration_hours: number;
      atmosphere: string;
    };
    activation: {
      enabled: boolean;
      type: string;
      agent: string;
      concentration_percent_wv: number;
      solution_volume_ml: number;
      acid_mass_g: number;
      soaking_time_hours: number;
    };
    washing: {
      enabled: boolean;
      method: string;
    };
    drying: {
      temperature_celsius: number;
      duration_hours: number;
    };
    composite_formation: {
      enabled: boolean;
      fractions: {
        biochar: number;
        binder: number;
        plasticizer: number;
      };
      masses_g: {
        biochar: number;
        binder: number;
        plasticizer: number;
      };
    };
  };
  predicted_performance: {
    co2_adsorption_score: number;
    structural_regime: string;
    confidence: number;
  };
  risk_assessment: {
    overall_risk: string;
    most_sensitive_step: string;
  };
  scientific_explanation: string;
}
