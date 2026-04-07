import { Router } from "express";
import { protect } from "../../middlewares/auth.middleware";
import * as ctrl from "./app.controller";

const router = Router();

router.use(protect);

router.post("/", ctrl.createApp);
router.get("/", ctrl.getApps);
router.put("/:id", ctrl.updateApp);
router.delete("/:id", ctrl.deleteApp);
router.patch("/:id/status", ctrl.updateStatus);

export default router;