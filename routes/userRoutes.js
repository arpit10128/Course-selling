import express from "express";
import {
  signup,
  login,
} from "../controllers/user/userAuthController.js";
import courses from "../controllers/user/courseController.js";
import purchasesController from "../controllers/user/purchaseController.js";

const router = express.Router();

router.post("/user/signup", signup);
router.post("/user/login", login);
router.get("/user/courses", courses);
router.post("/user/purchases");
router.get("/user/purchased", purchasesController);

export default router;
