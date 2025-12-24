import { TrendingUp } from 'lucide-react';
import { Performance as PerformanceType } from '../types/QuantumMorph';
import Tooltip from './Tooltip';

interface PerformanceProps {
  data: PerformanceType;
}

export default function Performance({ data }: PerformanceProps) {
  const normalizedScore = Math.min((data.co2AdsorptionScore / 10) * 100, 100);

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <TrendingUp className="text-cyan-400" size={24} />
        <h2 className="text-xl font-bold text-slate-100">Predicted Performance</h2>
      </div>

      <p className="text-slate-400 text-sm mb-6">
        Higher scores indicate better carbon capture efficiency. These predictions are based on
        structural properties, surface chemistry, and historical performance data.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-1 mb-4">
            <label className="text-sm text-slate-400">CO₂ Adsorption Score</label>
            <Tooltip text="Estimated CO₂ adsorption capacity in mmol/g under standard conditions (25°C, 1 bar)." />
          </div>

          <div className="relative h-12 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div
              className="absolute h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-1000 flex items-center justify-end pr-4"
              style={{ width: `${normalizedScore}%` }}
            >
              <span className="text-lg font-bold text-slate-900">{data.co2AdsorptionScore} mmol/g</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between text-xs text-slate-500">
            <span>0</span>
            <span>10</span>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-1 mb-4">
            <label className="text-sm text-slate-400">Prediction Confidence</label>
            <Tooltip text="Statistical confidence in the predicted performance based on model accuracy and input data quality." />
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-slate-800"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - data.confidence / 100)}`}
                  className="text-cyan-400 transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-cyan-400">{data.confidence}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-teal-900/20 border border-teal-500/30 rounded-lg p-4">
        <p className="text-teal-200 text-sm leading-relaxed">
          This material shows {data.co2AdsorptionScore >= 8 ? 'excellent' : data.co2AdsorptionScore >= 6 ? 'good' : 'moderate'} potential
          for CO₂ capture applications. Performance may vary based on operating conditions,
          gas composition, and regeneration protocols.
        </p>
      </div>
    </div>
  );
}
