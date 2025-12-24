import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 transition-smooth hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-750 transition-smooth"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-cyan-400 transition-transform duration-300">{icon}</span>}
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-cyan-400 transition-transform duration-300" size={20} />
        ) : (
          <ChevronDown className="text-cyan-400 transition-transform duration-300" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-slate-700 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
