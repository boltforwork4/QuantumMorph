import { QuantumMorphResult } from '../types/QuantumMorph';

export const sampleData: QuantumMorphResult = {
  overview: {
    title: "Quantum-Morph Material Design Result",
    confidence: 87.5,
    structuralRegime: "Optimal Composite"
  },
  materialInput: {
    name: "Agricultural Waste Biomass",
    category: "Lignocellulosic",
    mass: 250,
    moisture: 12.5
  },
  processPipeline: {
    pyrolysis: {
      temperature: 650,
      duration: 120,
      atmosphere: "Nitrogen (Inert)"
    },
    chemicalActivation: {
      chemical: "Phosphoric Acid (H₃PO₄)",
      concentration: 45,
      solutionVolume: 500,
      acidMass: 112.5,
      soakingTime: 180
    },
    washing: {
      cycles: 4,
      temperature: 60
    },
    drying: {
      temperature: 105,
      duration: 720
    }
  },
  compositeFormation: {
    biocharPercent: 72,
    binderPercent: 20,
    plasticizerPercent: 8,
    biocharMass: 180,
    binderMass: 50,
    plasticizerMass: 20
  },
  performance: {
    co2AdsorptionScore: 8.7,
    confidence: 85
  },
  riskAssessment: {
    overallRisk: "Moderate",
    riskLevel: 4.5,
    mostSensitiveStep: "Chemical Activation"
  },
  interpretation: "The AI jointly optimized thermal conditions and composite composition to balance pore hierarchy and mechanical stability. The elevated pyrolysis temperature (650°C) promotes micropore formation essential for CO₂ adsorption, while phosphoric acid activation creates mesoporous structures that facilitate gas diffusion. The composite ratio was tuned to maintain structural integrity while maximizing accessible surface area, resulting in a predicted adsorption capacity of 8.7 mmol/g with 85% confidence."
};
