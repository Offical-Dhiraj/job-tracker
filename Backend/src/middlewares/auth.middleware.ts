import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const protect = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        throw new Error("Unauthorized");
    }

    const decoded: any = jwt.verify(token, env.JWT_SECRET);
    req.user = decoded;
    next();
}