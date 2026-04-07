import mongoose from "mongoose";
import { env } from "./env"
const { setServers } = require("node:dns/promises")


export const connectDB = async () => {
    try {
        setServers(["1.1.1.1", "8.8.8.8"])

        const conn = await mongoose.connect(env.MONGO_URI);
        console.log(`DB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error("DB error", error.message);
        process.exit(1);

    }
}