import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, 
});

export const parseJobDescription = async (jd: string) => {
  try {
    const res = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content:
            "Extract job details in JSON format: company, role, skills, seniority, location",
        },
        {
          role: "user",
          content: jd,
        },
      ],
    });

    const text = res.choices[0].message.content;

    const cleaned = text?.replace(/```json|```/g, "").trim();

    return JSON.parse(cleaned!);
  } catch (err) {
    console.error("AI ERROR:", err);

    return {
      company: "Demo Company",
      role: "Software Engineer",
      skills: ["React"],
      seniority: "Mid",
      location: "Remote",
    };
  }
};

export const generateResumeSuggestions = async (role: string) => {
  try {
    const res = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content:
            "Generate 5 strong resume bullet points. Return ONLY JSON array.",
        },
        {
          role: "user",
          content: role,
        },
      ],
    });

    const text = res.choices[0].message.content;
    const cleaned = text?.replace(/```json|```/g, "").trim();

    return JSON.parse(cleaned!);
  } catch (err) {
    console.error(err);

    return [
      "Built scalable web applications",
      "Improved performance by 30%",
      "Developed REST APIs using Node.js",
    ];
  }
};