import { BookOpen } from 'lucide-react';

interface ScientificInterpretationProps {
  interpretation: string;
}

export default function ScientificInterpretation({ interpretation }: ScientificInterpretationProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-cyan-500/30 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="text-cyan-400" size={24} />
        <h2 className="text-xl font-bold text-slate-100">Scientific Interpretation</h2>
      </div>

      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
        <p className="text-slate-200 leading-relaxed text-base">
          {interpretation}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-700">
        <p className="text-sm text-slate-400 italic text-center">
          This output represents a digitally discovered material configuration, not a fixed recipe.
          Experimental validation is recommended to confirm predicted performance characteristics
          and optimize process parameters for specific applications.
        </p>
      </div>
    </div>
  );
}
