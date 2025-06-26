
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface AnalysisControlsProps {
  selectedSymptoms: string[];
  isAnalyzing: boolean;
  error: string | null;
  onAnalyze: () => void;
}

const AnalysisControls: React.FC<AnalysisControlsProps> = ({
  selectedSymptoms,
  isAnalyzing,
  error,
  onAnalyze
}) => {
  if (selectedSymptoms.length === 0) return null;

  return (
    <div className="border-t pt-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="text-gray-600">
          {selectedSymptoms.length} symptom{selectedSymptoms.length > 1 ? 's' : ''} selected
        </div>
        <Button 
          onClick={onAnalyze}
          disabled={isAnalyzing}
          className="bg-blue-600 hover:bg-blue-700 min-w-[200px]"
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Symptoms'}
        </Button>
      </div>
      
      {isAnalyzing && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-blue-800">AI is analyzing your symptoms...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-red-800 font-medium">Analysis Error</p>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisControls;
