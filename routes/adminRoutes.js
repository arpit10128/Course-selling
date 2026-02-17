import express from "express";
import {
  adminLogin,
  adminSignup,
} from "../controllers/admin/adminAuthController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { createCourse } from "../controllers/admin/createCourseController.js";
import { updateCourse } from "../controllers/admin/updateCourseController.js";
import { deleteCourse } from "../controllers/admin/deleteCourseController.js";

const router = express.Router();

router.post("/admin/signup", adminSignup);
router.post("/admin/signin", adminLogin);
router.post(
  "/admin/courses",
  adminMiddleware,
  createCourse,
);
router.put(
  "/admin/courses/:courseId",
  adminMiddleware,
  updateCourse,
);
router.delete(
  "admin/courses/:courseId",
  adminMiddleware,
  deleteCourse,
);

export default router;
