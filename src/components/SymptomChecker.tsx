
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AnalysisResult } from '@/types/symptom';
import { analyzeSymptoms, createFallbackAnalysis } from '@/utils/symptomAnalysis';
import SymptomSelector from './SymptomSelector';
import AnalysisControls from './AnalysisControls';
import AnalysisResults from './AnalysisResults';

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
    // Clear previous analysis and errors when symptoms change
    setAnalysis(null);
    setError(null);
  };

  const handleAnalyzeSymptoms = async () => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const result = await analyzeSymptoms(selectedSymptoms);
      setAnalysis(result);
      
      toast({
        title: "Analysis Complete",
        description: "Your symptoms have been analyzed successfully.",
      });

    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      
      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      // Fallback analysis for better user experience
      setAnalysis(createFallbackAnalysis());
    } finally {
      setIsAnalyzing(false);
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
                <SymptomSelector
                  selectedSymptoms={selectedSymptoms}
                  onToggleSymptom={toggleSymptom}
                />
                
                <AnalysisControls
                  selectedSymptoms={selectedSymptoms}
                  isAnalyzing={isAnalyzing}
                  error={error}
                  onAnalyze={handleAnalyzeSymptoms}
                />

                {analysis && <AnalysisResults analysis={analysis} />}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;
