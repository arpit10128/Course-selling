import express from "express";
import courses from "../controllers/courseController.js";

const router = express();

router.get("/courses", courses);

export default router;
