import { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { QuantumMorphResult } from '../types/QuantumMorph';
import { transformAPIToInternal, isAPIFormat, isInternalFormat } from '../utils/dataTransformer';

interface FileUploadProps {
  onDataLoaded: (data: QuantumMorphResult) => void;
}

export default function FileUpload({ onDataLoaded }: FileUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);

        let transformedData: QuantumMorphResult;

        if (isAPIFormat(json)) {
          transformedData = transformAPIToInternal(json);
        } else if (isInternalFormat(json)) {
          transformedData = json;
        } else {
          setError('Invalid data structure. Please ensure the JSON matches the required format.');
          setIsLoading(false);
          return;
        }

        onDataLoaded(transformedData);
      } catch (error) {
        setError('Invalid JSON file. Please check the file format.');
        console.error('JSON parse error:', error);
      } finally {
        setIsLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    };

    reader.onerror = () => {
      setError('Error reading file. Please try again.');
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
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

        {error && (
          <div className="bg-rose-900/20 border border-rose-500/30 rounded-lg p-3 max-w-md">
            <p className="text-rose-200 text-sm">{error}</p>
          </div>
        )}

        <label className={`cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isLoading ? 'Loading...' : 'Choose File'}
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            disabled={isLoading}
            className="hidden"
          />
        </label>
        <p className="text-xs text-slate-500">or use the sample data below</p>
      </div>
    </div>
  );
}
