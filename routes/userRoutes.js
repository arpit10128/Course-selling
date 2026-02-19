import express from "express";
import {
  signup,
  login,
} from "../controllers/user/userAuthController.js";
import courses from "../controllers/user/courseController.js";
import purchaseController from "../controllers/user/purchaseController.js";
import purchasedController from "../controllers/user/purchasedController.js";
import userMiddleware from "../middleware/userMiddleware.js";

const router = express.Router();

router.post("/user/signup", signup);
router.post("/user/login", login);
router.get("/user/courses", courses); //anyone who come on the website, can see all courses
router.post(
  "/user/purchase",
  userMiddleware,
  purchaseController,
);
router.get(
  "/user/purchased",
  userMiddleware,
  purchasedController,
);

export default router;
