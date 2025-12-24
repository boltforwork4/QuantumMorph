import { Package } from 'lucide-react';
import { MaterialInput as MaterialInputType } from '../types/QuantumMorph';
import Tooltip from './Tooltip';

interface MaterialInputProps {
  data: MaterialInputType;
}

export default function MaterialInput({ data }: MaterialInputProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <Package className="text-cyan-400" size={24} />
        <h2 className="text-xl font-bold text-slate-100">Material Input</h2>
      </div>

      <p className="text-slate-400 text-sm mb-6">
        These parameters describe the raw waste material before any processing.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-slate-400">Material Name</label>
            <Tooltip text="The source biomass material used as feedstock for carbon capture material production." />
          </div>
          <p className="text-lg font-semibold text-slate-100">{data.name}</p>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-slate-400">Category</label>
            <Tooltip text="Classification of the biomass based on its chemical composition and structural properties." />
          </div>
          <p className="text-lg font-semibold text-slate-100">{data.category}</p>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-slate-400">Input Mass</label>
          </div>
          <p className="text-lg font-semibold text-slate-100">{data.mass} g</p>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-slate-400">Moisture Content</label>
            <Tooltip text="Water content in the raw material, which affects pyrolysis efficiency and final product yield." />
          </div>
          <p className="text-lg font-semibold text-slate-100">{data.moisture}%</p>
        </div>
      </div>
    </div>
  );
}
