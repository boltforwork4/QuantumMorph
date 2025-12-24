import { Flame, Beaker, Droplets, Wind } from 'lucide-react';
import { ProcessPipeline as ProcessPipelineType } from '../types/QuantumMorph';
import CollapsibleSection from './CollapsibleSection';
import Tooltip from './Tooltip';

interface ProcessPipelineProps {
  data: ProcessPipelineType;
}

export default function ProcessPipeline({ data }: ProcessPipelineProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-100 mb-4">Process Pipeline</h2>
      <p className="text-slate-400 text-sm mb-6">
        The material undergoes a series of controlled transformations to develop optimal pore structure and surface chemistry for CO₂ capture.
      </p>

      <CollapsibleSection
        title="Pyrolysis"
        icon={<Flame size={24} />}
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
            <p className="text-slate-300 mb-4 leading-relaxed">
              Pyrolysis converts biomass into carbon by heating it without oxygen, forming
              the base biochar structure. This thermal decomposition process removes volatile
              compounds and creates a porous carbon framework.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm text-slate-400">Temperature</label>
                  <Tooltip text="Higher temperatures increase micropore formation but may reduce overall yield." />
                </div>
                <p className="text-2xl font-bold text-cyan-400">{data.pyrolysis.temperature}°C</p>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm text-slate-400">Duration</label>
                  <Tooltip text="Residence time ensures complete carbonization of the biomass structure." />
                </div>
                <p className="text-2xl font-bold text-cyan-400">{data.pyrolysis.duration} min</p>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm text-slate-400">Atmosphere</label>
                  <Tooltip text="Inert atmosphere prevents oxidation and ensures controlled pyrolysis." />
                </div>
                <p className="text-lg font-semibold text-slate-100">{data.pyrolysis.atmosphere}</p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Chemical Activation"
        icon={<Beaker size={24} />}
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mb-4">
            <p className="text-amber-200 text-sm">
              ⚠️ Activation increases pore accessibility for CO₂ adsorption by creating additional
              micropores and mesopores through controlled chemical etching.
            </p>
          </div>

          <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm text-slate-400">Chemical Agent</label>
                  <Tooltip text="Phosphoric acid creates hierarchical pore structures while adding phosphorus functional groups." />
                </div>
                <p className="text-xl font-bold text-cyan-400">{data.chemicalActivation.chemical}</p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-1 block">Concentration</label>
                <p className="text-2xl font-bold text-cyan-400">{data.chemicalActivation.concentration}%</p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-1 block">Acid Mass</label>
                <p className="text-2xl font-bold text-cyan-400">{data.chemicalActivation.acidMass} g</p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-1 block">Solution Volume</label>
                <p className="text-2xl font-bold text-cyan-400">{data.chemicalActivation.solutionVolume} mL</p>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label className="text-sm text-slate-400">Soaking Time</label>
                  <Tooltip text="Extended contact time allows thorough penetration and uniform activation." />
                </div>
                <p className="text-2xl font-bold text-cyan-400">{data.chemicalActivation.soakingTime} min</p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Washing"
        icon={<Droplets size={24} />}
      >
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <p className="text-slate-300 mb-4 leading-relaxed">
            Removes residual chemicals to stabilize the material. Thorough washing is essential
            to achieve neutral pH and remove any unreacted activation agent, ensuring material
            stability and safety.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Washing Cycles</label>
              <p className="text-2xl font-bold text-cyan-400">{data.washing.cycles}</p>
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-1 block">Water Temperature</label>
              <p className="text-2xl font-bold text-cyan-400">{data.washing.temperature}°C</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Drying"
        icon={<Wind size={24} />}
      >
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <p className="text-slate-300 mb-4 leading-relaxed">
            Final drying removes moisture while preserving the developed pore structure.
            Controlled temperature prevents pore collapse while ensuring complete water removal
            for accurate characterization.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Temperature</label>
              <p className="text-2xl font-bold text-cyan-400">{data.drying.temperature}°C</p>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm text-slate-400">Duration</label>
                <Tooltip text="Extended drying time ensures complete moisture removal for consistent material properties." />
              </div>
              <p className="text-2xl font-bold text-cyan-400">{data.drying.duration} min</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}
