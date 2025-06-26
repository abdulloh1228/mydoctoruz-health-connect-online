
import React from 'react';
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import { AnalysisResult } from '@/types/symptom';
import { getSeverityColor } from '@/utils/symptomAnalysis';

interface AnalysisResultsProps {
  analysis: AnalysisResult;
}

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'low': return <CheckCircle className="w-5 h-5" />;
    case 'moderate': return <AlertTriangle className="w-5 h-5" />;
    case 'high': return <AlertCircle className="w-5 h-5" />;
    default: return <AlertCircle className="w-5 h-5" />;
  }
};

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ analysis }) => {
  return (
    <div className="mt-6 space-y-6">
      {/* Severity Level */}
      <div className={`p-4 rounded-lg border ${getSeverityColor(analysis.severity)}`}>
        <div className="flex items-center space-x-3">
          {getSeverityIcon(analysis.severity)}
          <div>
            <h4 className="font-semibold">
              Severity Level: {analysis.severity.charAt(0).toUpperCase() + analysis.severity.slice(1)}
            </h4>
            {analysis.seekImmediateCare && (
              <p className="text-red-600 font-medium mt-1">
                ⚠️ Consider seeking immediate medical attention
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Possible Conditions */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Possible Conditions:</h4>
        <ul className="space-y-2">
          {analysis.possibleConditions.map((condition, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-gray-700">{condition}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendations */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Recommendations:</h4>
        <ul className="space-y-2">
          {analysis.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-800">
          <strong>Medical Disclaimer:</strong> {analysis.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default AnalysisResults;
