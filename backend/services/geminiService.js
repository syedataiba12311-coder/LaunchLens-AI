import OpenAI from "openai";
import { buildPrompt } from "../prompts/startupPrompt.js";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || "gsk_placeholder",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function analyzeIdea(data) {
  try {
    console.log("🚀 Sending request to Groq...");
    if (process.env.GROQ_API_KEY) {
      client.apiKey = process.env.GROQ_API_KEY;
    }

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are an expert startup consultant and venture analyst. Evaluate startup submissions strictly and realistically based on actual feasibility and clarity. If the input is gibberish or nonsensical, assign a low score (0-15) and state that the input is invalid. Always return ONLY valid JSON without markdown or explanations.",
        },
        {
          role: "user",
          content: buildPrompt(data),
        },
      ],
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const text = response.choices[0].message.content;

    console.log("✅ Groq Response Received");

    return JSON.parse(text);

  } catch (error) {
    console.error("❌ GROQ ERROR:");
    console.error(error);

    throw error;
  }
}
