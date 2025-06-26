
import { supabase } from '@/integrations/supabase/client';
import { AnalysisResult } from '@/types/symptom';
import { symptoms } from '@/data/symptoms';

export const analyzeSymptoms = async (selectedSymptoms: string[]): Promise<AnalysisResult> => {
  console.log('Starting symptom analysis...');
  console.log('Selected symptoms:', selectedSymptoms);
  
  const selectedSymptomNames = selectedSymptoms.map(id => 
    symptoms.find(s => s.id === id)?.name
  ).filter(Boolean);

  console.log('Symptom names to analyze:', selectedSymptomNames);

  if (selectedSymptomNames.length === 0) {
    throw new Error('Please select at least one symptom to analyze');
  }

  console.log('Calling Supabase function...');
  const { data, error } = await supabase.functions.invoke('analyze-symptoms', {
    body: { symptoms: selectedSymptomNames }
  });

  console.log('Function response:', { data, error });

  if (error) {
    console.error('Supabase function error:', error);
    throw new Error(error.message || 'Failed to analyze symptoms');
  }

  if (!data || !data.analysis) {
    console.error('Invalid response format:', data);
    throw new Error('Invalid response from analysis service');
  }

  console.log('Analysis result:', data.analysis);
  return data.analysis;
};

export const createFallbackAnalysis = (): AnalysisResult => ({
  possibleConditions: ['Analysis temporarily unavailable'],
  severity: 'moderate',
  recommendations: ['Please try again later or consult with a healthcare professional for proper evaluation'],
  seekImmediateCare: false,
  disclaimer: 'This AI analysis is for informational purposes only and should not replace professional medical advice.'
});

export const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'low': return 'text-green-600 bg-green-50';
    case 'moderate': return 'text-yellow-600 bg-yellow-50';
    case 'high': return 'text-red-600 bg-red-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};
