import { AlertTriangle } from 'lucide-react';
import { RiskAssessment as RiskAssessmentType } from '../types/QuantumMorph';
import Tooltip from './Tooltip';

interface RiskAssessmentProps {
  data: RiskAssessmentType;
}

export default function RiskAssessment({ data }: RiskAssessmentProps) {
  const getRiskColor = (level: number) => {
    if (level <= 3) return { bg: 'bg-emerald-500', text: 'text-emerald-300', border: 'border-emerald-500/30', accent: 'bg-emerald-900/20' };
    if (level <= 6) return { bg: 'bg-amber-500', text: 'text-amber-300', border: 'border-amber-500/30', accent: 'bg-amber-900/20' };
    return { bg: 'bg-rose-500', text: 'text-rose-300', border: 'border-rose-500/30', accent: 'bg-rose-900/20' };
  };

  const colors = getRiskColor(data.riskLevel);

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 transition-smooth hover:border-slate-600">
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="text-cyan-400" size={24} />
        <h2 className="text-xl font-bold text-slate-100">Risk & Safety Assessment</h2>
      </div>

      <p className="text-slate-400 text-sm mb-6">
        Risk assessment helps identify which stage requires the most control during real implementation.
        Proper safety protocols and monitoring equipment are essential for safe operation.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${colors.accent} border ${colors.border} rounded-lg p-6 transition-smooth hover:border-opacity-100 hover:shadow-lg`} style={{ boxShadow: 'hover' ? `0 4px 12px ${colors.bg}` : 'none' }}>
          <div className="flex items-center gap-1 mb-4">
            <label className="text-sm text-slate-400">Overall Risk Level</label>
            <Tooltip text="Comprehensive risk score considering chemical hazards, thermal conditions, and operational complexity." />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className={`text-4xl font-bold ${colors.text} transition-transform duration-500 hover:scale-110`}>{data.overallRisk}</span>
            <div className="flex-1">
              <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden transition-smooth hover:bg-slate-700">
                <div
                  className={`absolute h-full ${colors.bg} animate-fillBar`}
                  style={{ '--bar-width': `${(data.riskLevel / 10) * 100}%` } as React.CSSProperties}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-400">
            Risk Score: <span className={`font-semibold ${colors.text}`}>{data.riskLevel}/10</span>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 transition-smooth hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
          <div className="flex items-center gap-1 mb-4">
            <label className="text-sm text-slate-400">Most Sensitive Step</label>
            <Tooltip text="The process stage requiring the most careful control and monitoring to ensure safety and product quality." />
          </div>

          <div className="flex items-center gap-3 animate-scaleIn">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center transition-transform duration-500 hover:scale-125 hover:bg-amber-500/30">
              <AlertTriangle className="text-amber-400" size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-100">{data.mostSensitiveStep}</p>
              <p className="text-sm text-slate-400 mt-1">Requires enhanced monitoring</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-900 rounded-lg p-4 border border-slate-700">
        <h3 className="text-sm font-semibold text-slate-300 mb-2">Safety Recommendations</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">•</span>
            <span>Use appropriate personal protective equipment (PPE) including chemical-resistant gloves and safety goggles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">•</span>
            <span>Ensure adequate ventilation during chemical handling and thermal processing stages</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">•</span>
            <span>Implement temperature monitoring and control systems for pyrolysis and drying operations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">•</span>
            <span>Follow proper chemical waste disposal procedures for activation agent neutralization</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
