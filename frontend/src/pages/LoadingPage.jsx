import OpenAI from "openai";
import { buildPrompt } from "../prompts/startupPrompt.js";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || "gsk_placeholder",
  baseURL: "https://api.groq.com/openai/v1",
});

const buildFallbackReport = (data) => ({
  executiveSummary:
    `${data.startupName || 'This startup'} has a clear problem-solution framing, but the idea needs stronger evidence before committing build time or budget.`,
  problemStatement:
    'The report could not be fully generated because the AI response was incomplete or invalid. Use the idea brief to refine the problem, target customer, and value proposition before moving forward.',
  solution:
    'Refine the startup concept with a clearer value proposition, measurable customer pain, and a sharp initial MVP. Treat this as a draft rather than a final decision.',
  targetAudience: data.audience || 'Early-stage founders, target users, and decision-makers in the relevant market.',
  competitors: [
    {
      company: 'Market competitors',
      strength: 'Existing products may already serve the same customer.',
      weakness: 'There is likely room for a more focused, better-executed niche offer.',
      marketPosition: 'Early validation stage',
    },
  ],
  swot: {
    strengths: ['Clear intent', 'Good problem framing'],
    weaknesses: ['Needs stronger validation', 'Requires clearer segmentation'],
    opportunities: ['Targeted early traction', 'Strong messaging opportunities'],
    threats: ['Competition', 'Unclear monetization'],
  },
  revenueModel: 'Use a narrow, easy-to-understand monetization strategy with a simple first customer segment and clear conversion path.',
  mvpFeatures: ['Single core use case', 'Clear onboarding flow', 'Fast feedback loop'],
  marketingStrategy: ['Customer interviews', 'Landing page tests', 'Targeted outreach'],
  businessRisks: ['Weak differentiation', 'Unknown market demand', 'Execution overreach'],
  recommendedTechStack: ['React', 'Node.js', 'PostgreSQL', 'AI API'],
  roadmap: [{ month: 'Month 1', goal: 'Validate problem through interviews and landing-page tests' }],
  successScore: 45,
  recommendations: [
    'Clarify the customer problem and ideal user profile.',
    'Run interviews with at least 10 target users before building the full product.',
    'Test a simple landing page or prototype to validate demand before scaling.',
  ],
  aiDisclaimer:
    'This report was generated as a fallback after an AI processing error. It should be used as a rough starting point, not as a final strategic decision.',
});

export async function analyzeIdea(data) {
  try {
    console.log('🚀 Sending request to Groq...');
    if (process.env.GROQ_API_KEY) {
      client.apiKey = process.env.GROQ_API_KEY;
    }

    const response = await client.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert startup consultant and venture analyst. Evaluate startup submissions strictly and realistically based on actual feasibility and clarity. If the input is gibberish or nonsensical, assign a low score (0-15) and state that the input is invalid. Always return ONLY valid JSON without markdown or explanations.',
        },
        {
          role: 'user',
          content: buildPrompt(data),
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const text = response?.choices?.[0]?.message?.content || '';

    if (!text) {
      throw new Error('The AI model returned an empty response.');
    }

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      console.error('Failed to parse Groq JSON:', error);
      throw error;
    }

    if (!parsed || typeof parsed !== 'object') {
      throw new Error('The AI model returned an invalid payload structure.');
    }

    parsed.aiDisclaimer =
      'This report is AI-generated and intended for strategic guidance. Validate the output with market research, customer interviews, and product feasibility checks before making major decisions.';

    return parsed;
  } catch (error) {
    console.error('❌ GROQ ERROR:');
    console.error(error);

    return buildFallbackReport(data);
  }
}
