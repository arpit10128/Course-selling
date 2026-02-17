import express from "express";
import {
  signup,
  login,
} from "../controllers/user/userAuthController.js";
import courses from "../controllers/user/courseController.js";
import purchasesController from "../controllers/user/purchaseController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/courses", courses);
router.get("/purchases", purchasesController);

export default router;
