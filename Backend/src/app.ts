import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

import authRoutes from "./modules/auth/auth.routes";
import appRoutes from "./modules/application/app.routes";
import { errorHandler } from "./middlewares/error.middleware";
import aiRoutes from "./modules/ai/ai.routes";


const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/ai", aiRoutes);

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/auth", authRoutes);
app.use("/api/applications", appRoutes);

app.use(errorHandler);

export default app;