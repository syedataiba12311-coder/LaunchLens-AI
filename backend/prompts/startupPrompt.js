export const buildPrompt = (data) => `
You are an experienced Startup Consultant, Venture Capitalist, Product Manager, and Business Strategist.

Critically analyze the following startup submission:

Startup Name: ${data.startupName || 'Not specified'}
Startup Idea: ${data.startupIdea || 'No description provided'}
Industry: ${data.industry || 'Not specified'}
Target Country: ${data.country || data.targetCountry || 'Not specified'}
Target Audience: ${data.audience || data.targetAudience || 'Not specified'}
Business Stage: ${data.stage || data.businessStage || 'Not specified'}
Budget: ${data.budget || 'Not specified'}
Goals: ${data.goals || 'Not specified'}

CRITICAL INSTRUCTIONS FOR EVALUATION:
1. INPUT VALIDITY: Carefully check if the provided Startup Name or Startup Idea consists of random characters, keyboard mashing, gibberish (e.g., "sj;qksqw;"), or lacks any coherent business concept.
   - If the input IS gibberish or invalid: Set "successScore" between 0 and 15. In "executiveSummary" and "problemStatement", explicitly state that the input is invalid or random gibberish and cannot be analyzed as a legitimate business concept. Do NOT hallucinate an unrelated business (such as AR e-commerce) for random text.
2. REALISTIC DYNAMIC SCORING: Calculate a genuine, realistic "successScore" (integer from 0 to 100) based strictly on market potential, clarity, feasibility, and risk. Do NOT default to 85.

Return ONLY valid JSON using exactly this structure:

{
  "executiveSummary": "",
  "problemStatement": "",
  "solution": "",
  "targetAudience": "",
  "competitors": [
    {
      "company": "",
      "strength": "",
      "weakness": "",
      "marketPosition": ""
    }
  ],
  "swot": {
    "strengths": [],
    "weaknesses": [],
    "opportunities": [],
    "threats": []
  },
  "revenueModel": "",
  "mvpFeatures": [],
  "marketingStrategy": [],
  "businessRisks": [],
  "recommendedTechStack": [],
  "roadmap": [
    {
      "month": "",
      "goal": ""
    }
  ],
  "successScore": 50,
  "recommendations": []
}

Do not include markdown formatting or code fences.
Return JSON only.
`;

export function startupPrompt(data) {
  return buildPrompt(data);
}
