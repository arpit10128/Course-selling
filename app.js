import express from "express";
import authRoutes from "./routes/authRoute.js";

const app = express();

/* global middleware */
app.use(express.json());

/* routes */
app.use("/auth", authRoutes);

/* error handler (always last) */

export default app;
