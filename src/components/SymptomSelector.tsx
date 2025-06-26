
import React from 'react';
import { symptoms } from '@/data/symptoms';

interface SymptomSelectorProps {
  selectedSymptoms: string[];
  onToggleSymptom: (symptomId: string) => void;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  selectedSymptoms,
  onToggleSymptom
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        What symptoms are you experiencing?
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {symptoms.map((symptom) => (
          <button
            key={symptom.id}
            onClick={() => onToggleSymptom(symptom.id)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedSymptoms.includes(symptom.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="text-3xl mb-2">{symptom.emoji}</div>
            <div className="font-medium text-gray-900">{symptom.name}</div>
            <div className="text-sm text-gray-500">{symptom.nameUz}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SymptomSelector;
