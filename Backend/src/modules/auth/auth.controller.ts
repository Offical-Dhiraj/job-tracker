import { asyncHandler } from "../../utils/asyncHandler";
import { registerUser, loginUser } from "./auth.service";

export const register = asyncHandler(async (req: any, res: any) => {
  const data = await registerUser(req.body.email, req.body.password);
  res.status(201).json({ success: true, data });
});

export const login = asyncHandler(async (req: any, res: any) => {
  const data = await loginUser(req.body.email, req.body.password);
  res.json({ success: true, data });
});