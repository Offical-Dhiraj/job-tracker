
import OpenAI from "openai";
import { env } from "../../config/env";

const client = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const parseJobDescription = async (jd: string) => {
  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: `Extract structured JSON with:
        company, role, skills, niceToHave, seniority, location`,
      },
      {
        role: "user",
        content: jd,
      },
    ],
    response_format: { type: "json_object" },
  });

  try {
    return JSON.parse(res.choices[0].message.content!);
  } catch {
    throw new Error("Invalid AI response");
  }
};

export const generateResumeSuggestions = async (role: string) => {
  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Generate 3-5 strong resume bullet points",
      },
      {
        role: "user",
        content: `Role: ${role}`,
      },
    ],
  });

  return res.choices[0].message.content;
};