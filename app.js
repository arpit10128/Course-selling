import express from "express";
import userAuthRoutes from "./routes/userAuthRoute.js";
import adminAuthRoutes from "./routes/adminAuthRoute.js";
import coursesRoute from "./routes/courseRoute.js";

const app = express();

/* global middleware */
app.use(express.json());

/* routes */
app.use("/", userAuthRoutes);
app.use("/", adminAuthRoutes);
app.use("/", coursesRoute);

/* error handler (always last) */

export default app;
