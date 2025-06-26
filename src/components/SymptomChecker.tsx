
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface AnalysisResult {
  possibleConditions: string[];
  severity: 'low' | 'moderate' | 'high';
  recommendations: string[];
  seekImmediateCare: boolean;
  disclaimer: string;
}

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const symptoms = [
    { id: 'headache', emoji: '🤕', name: 'Headache', nameUz: 'Bosh og\'rig\'i' },
    { id: 'fever', emoji: '🤒', name: 'Fever', nameUz: 'Isitma' },
    { id: 'cough', emoji: '😷', name: 'Cough', nameUz: 'Yo\'tal' },
    { id: 'stomach', emoji: '🤢', name: 'Stomach Pain', nameUz: 'Qorin og\'rig\'i' },
    { id: 'fatigue', emoji: '😴', name: 'Fatigue', nameUz: 'Charchoq' },
    { id: 'bodyache', emoji: '💪', name: 'Body Ache', nameUz: 'Tana og\'rig\'i' }
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
    // Clear previous analysis when symptoms change
    setAnalysis(null);
  };

  const analyzeSymptoms = async () => {
    setIsAnalyzing(true);
    
    try {
      const selectedSymptomNames = selectedSymptoms.map(id => 
        symptoms.find(s => s.id === id)?.name
      ).filter(Boolean);

      const { data, error } = await supabase.functions.invoke('analyze-symptoms', {
        body: { symptoms: selectedSymptomNames }
      });

      if (error) {
        throw error;
      }

      setAnalysis(data.analysis);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      setAnalysis({
        possibleConditions: ['Analysis Error'],
        severity: 'moderate',
        recommendations: ['Unable to analyze symptoms. Please try again or consult a healthcare professional.'],
        seekImmediateCare: false,
        disclaimer: 'This AI analysis is for informational purposes only.'
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return <CheckCircle className="w-5 h-5" />;
      case 'moderate': return <AlertTriangle className="w-5 h-5" />;
      case 'high': return <AlertCircle className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Symptom Checker
            </h2>
            <p className="text-xl text-gray-600">
              Select your symptoms below and get instant health insights from our advanced AI
            </p>
          </div>
          
          <Card className="border border-gray-100 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    What symptoms are you experiencing?
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {symptoms.map((symptom) => (
                      <button
                        key={symptom.id}
                        onClick={() => toggleSymptom(symptom.id)}
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
                
                {selectedSymptoms.length > 0 && (
                  <div className="border-t pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <div className="text-gray-600">
                        {selectedSymptoms.length} symptom{selectedSymptoms.length > 1 ? 's' : ''} selected
                      </div>
                      <Button 
                        onClick={analyzeSymptoms}
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

                    {analysis && (
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
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;
