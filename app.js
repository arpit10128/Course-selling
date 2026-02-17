import express from "express";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

/* global middleware */
app.use(express.json());

/* routes */
app.use("/", userRoutes);
app.use("/", adminRoutes);

/* error handler (always last) */

export default app;
