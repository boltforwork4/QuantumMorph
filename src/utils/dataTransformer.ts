import { APIQuantumMorphResult, QuantumMorphResult } from '../types/QuantumMorph';

const getRiskLevel = (riskString: string): number => {
  const riskMap: { [key: string]: number } = {
    'low': 3,
    'moderate': 5,
    'high': 8,
    'very high': 9.5
  };
  return riskMap[riskString.toLowerCase()] || 5;
};

const capitalizeWords = (str: string): string => {
  return str.split('_').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export const transformAPIToInternal = (apiData: APIQuantumMorphResult): QuantumMorphResult => {
  const washingCycles = apiData.process_plan.washing.enabled ? 4 : 0;
  const washingTemp = 60;

  return {
    overview: {
      title: "Quantum-Morph Material Design Result",
      confidence: Math.round(apiData.predicted_performance.confidence * 100 * 10) / 10,
      structuralRegime: capitalizeWords(apiData.predicted_performance.structural_regime)
    },
    materialInput: {
      name: apiData.material.name,
      category: capitalizeWords(apiData.material.category),
      mass: apiData.material.input_mass_g,
      moisture: apiData.material.moisture * 100
    },
    processPipeline: {
      pyrolysis: {
        temperature: apiData.process_plan.pyrolysis.temperature_celsius,
        duration: Math.round(apiData.process_plan.pyrolysis.duration_hours * 60),
        atmosphere: capitalizeWords(apiData.process_plan.pyrolysis.atmosphere) + ' (Inert)'
      },
      chemicalActivation: {
        chemical: apiData.process_plan.activation.agent === 'HCl'
          ? 'Hydrochloric Acid (HCl)'
          : apiData.process_plan.activation.agent === 'H₃PO₄' || apiData.process_plan.activation.agent === 'H3PO4'
          ? 'Phosphoric Acid (H₃PO₄)'
          : apiData.process_plan.activation.agent,
        concentration: apiData.process_plan.activation.concentration_percent_wv,
        solutionVolume: apiData.process_plan.activation.solution_volume_ml,
        acidMass: apiData.process_plan.activation.acid_mass_g,
        soakingTime: Math.round(apiData.process_plan.activation.soaking_time_hours * 60)
      },
      washing: {
        cycles: washingCycles,
        temperature: washingTemp
      },
      drying: {
        temperature: apiData.process_plan.drying.temperature_celsius,
        duration: Math.round(apiData.process_plan.drying.duration_hours * 60)
      }
    },
    compositeFormation: {
      biocharPercent: Math.round(apiData.process_plan.composite_formation.fractions.biochar * 100),
      binderPercent: Math.round(apiData.process_plan.composite_formation.fractions.binder * 100),
      plasticizerPercent: Math.round(apiData.process_plan.composite_formation.fractions.plasticizer * 100),
      biocharMass: apiData.process_plan.composite_formation.masses_g.biochar,
      binderMass: apiData.process_plan.composite_formation.masses_g.binder,
      plasticizerMass: apiData.process_plan.composite_formation.masses_g.plasticizer
    },
    performance: {
      co2AdsorptionScore: Math.round(apiData.predicted_performance.co2_adsorption_score * 44 * 10) / 10,
      confidence: Math.round(apiData.predicted_performance.confidence * 100)
    },
    riskAssessment: {
      overallRisk: capitalizeWords(apiData.risk_assessment.overall_risk),
      riskLevel: getRiskLevel(apiData.risk_assessment.overall_risk),
      mostSensitiveStep: capitalizeWords(apiData.risk_assessment.most_sensitive_step)
    },
    interpretation: apiData.scientific_explanation
  };
};

export const isAPIFormat = (data: any): data is APIQuantumMorphResult => {
  return (
    data &&
    typeof data === 'object' &&
    data.status &&
    data.material &&
    data.process_plan &&
    data.predicted_performance &&
    data.risk_assessment &&
    data.scientific_explanation
  );
};

export const isInternalFormat = (data: any): data is QuantumMorphResult => {
  return (
    data &&
    typeof data === 'object' &&
    data.overview &&
    data.materialInput &&
    data.processPipeline &&
    data.compositeFormation &&
    data.performance &&
    data.riskAssessment &&
    data.interpretation
  );
};
