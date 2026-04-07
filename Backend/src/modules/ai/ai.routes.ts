
import { Router } from "express";
import { parseJD, getResumeSuggestions } from "./ai.controller";
import { protect } from "../../middlewares/auth.middleware";

const router = Router();

router.use(protect);

router.post("/parse", parseJD);
router.post("/resume", getResumeSuggestions);

export default router;