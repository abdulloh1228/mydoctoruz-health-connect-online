
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { symptoms } = await req.json();

    if (!symptoms || symptoms.length === 0) {
      return new Response(JSON.stringify({ error: 'No symptoms provided' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const symptomList = symptoms.join(', ');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a medical AI assistant that helps analyze symptoms. Provide helpful information but always remind users to consult with healthcare professionals. Format your response as JSON with the following structure:
            {
              "possibleConditions": ["condition1", "condition2", "condition3"],
              "severity": "low|moderate|high",
              "recommendations": ["recommendation1", "recommendation2"],
              "seekImmediateCare": boolean,
              "disclaimer": "Medical disclaimer text"
            }`
          },
          {
            role: 'user',
            content: `Analyze these symptoms: ${symptomList}. Provide possible conditions, severity assessment, and recommendations.`
          }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    let analysis;
    try {
      analysis = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      // Fallback if JSON parsing fails
      analysis = {
        possibleConditions: ["Analysis unavailable"],
        severity: "moderate",
        recommendations: ["Please consult with a healthcare professional for proper evaluation"],
        seekImmediateCare: false,
        disclaimer: "This AI analysis is for informational purposes only and should not replace professional medical advice."
      };
    }

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-symptoms function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
