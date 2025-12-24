import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1"
      >
        <HelpCircle size={16} />
      </button>
      {isVisible && (
        <div className="absolute z-10 w-64 p-3 bg-slate-900 text-slate-200 text-sm rounded-lg shadow-xl border border-cyan-500/30 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-8 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}
