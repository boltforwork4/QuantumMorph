import { Layers } from 'lucide-react';
import { CompositeComposition } from '../types/QuantumMorph';
import Tooltip from './Tooltip';

interface CompositeFormationProps {
  data: CompositeComposition;
}

export default function CompositeFormation({ data }: CompositeFormationProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Layers className="text-cyan-400" size={24} />
        <h2 className="text-xl font-bold text-slate-100">Composite Formation</h2>
      </div>

      <p className="text-slate-400 text-sm mb-6">
        The AI optimized the composite composition to balance porosity and mechanical stability,
        creating a material that maintains structural integrity while maximizing CO₂ adsorption capacity.
      </p>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <label className="text-sm font-medium text-slate-300">Biochar</label>
              <Tooltip text="Primary adsorbent component providing the porous structure for CO₂ capture." />
            </div>
            <span className="text-slate-300 font-semibold">{data.biocharPercent}% ({data.biocharMass}g)</span>
          </div>
          <div className="relative h-8 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
            <div
              className="absolute h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-1000"
              style={{ width: `${data.biocharPercent}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <label className="text-sm font-medium text-slate-300">Binder</label>
              <Tooltip text="Provides mechanical strength and holds the composite structure together." />
            </div>
            <span className="text-slate-300 font-semibold">{data.binderPercent}% ({data.binderMass}g)</span>
          </div>
          <div className="relative h-8 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
            <div
              className="absolute h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-1000 delay-100"
              style={{ width: `${data.binderPercent}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <label className="text-sm font-medium text-slate-300">Plasticizer</label>
              <Tooltip text="Enhances flexibility and workability of the composite material." />
            </div>
            <span className="text-slate-300 font-semibold">{data.plasticizerPercent}% ({data.plasticizerMass}g)</span>
          </div>
          <div className="relative h-8 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
            <div
              className="absolute h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 delay-200"
              style={{ width: `${data.plasticizerPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Total Composite Mass</span>
            <span className="text-xl font-bold text-cyan-400">
              {data.biocharMass + data.binderMass + data.plasticizerMass} g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
