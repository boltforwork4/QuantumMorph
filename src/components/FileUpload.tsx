import { Upload } from 'lucide-react';
import { QuantumMorphResult } from '../types/QuantumMorph';

interface FileUploadProps {
  onDataLoaded: (data: QuantumMorphResult) => void;
}

export default function FileUpload({ onDataLoaded }: FileUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        onDataLoaded(json);
      } catch (error) {
        alert('Invalid JSON file. Please check the file format.');
        console.error('JSON parse error:', error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-slate-800 rounded-lg p-8 border-2 border-dashed border-slate-600 hover:border-cyan-500/50 transition-colors">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
          <Upload className="text-cyan-400" size={32} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-100 mb-2">
            Upload Quantum-Morph JSON
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Load your AI-generated material transformation plan
          </p>
        </div>
        <label className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors">
          Choose File
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <p className="text-xs text-slate-500">or use the sample data below</p>
      </div>
    </div>
  );
}
