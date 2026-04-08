import express from "express";
import {
  createApplication,
  getApplications,
  updateStatus,
  deleteApplication,
  updateApplication,
} from "./app.controller";

import { protect } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", protect, createApplication);
router.get("/", protect, getApplications);
router.patch("/:id/status", protect, updateStatus);
router.delete("/:id", protect, deleteApplication);
router.put("/:id", protect, updateApplication);

export default router;