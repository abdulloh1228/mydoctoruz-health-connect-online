
export interface AnalysisResult {
  possibleConditions: string[];
  severity: 'low' | 'moderate' | 'high';
  recommendations: string[];
  seekImmediateCare: boolean;
  disclaimer: string;
}

export interface Symptom {
  id: string;
  emoji: string;
  name: string;
  nameUz: string;
}
