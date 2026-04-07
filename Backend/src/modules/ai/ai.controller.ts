
import { asyncHandler } from "../../utils/asyncHandler";
import {
  parseJobDescription,
  generateResumeSuggestions,
} from "./ai.service";

// 🔹 Parse JD
export const parseJD = asyncHandler(async (req: any, res: any) => {
  const { jd } = req.body;

  if (!jd) throw new Error("Job description is required");

  const data = await parseJobDescription(jd);

  res.json({
    success: true,
    data,
  });
});

// 🔹 Resume Suggestions
export const getResumeSuggestions = asyncHandler(async (req: any, res: any) => {
  const { role } = req.body;

  if (!role) throw new Error("Role is required");

  const data = await generateResumeSuggestions(role);

  res.json({
    success: true,
    data,
  });
});