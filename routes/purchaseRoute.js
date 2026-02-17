import express from "express";
import purchasesController from "../controllers/purchaseController";

const router = express.Router();

router.get("/purchases", purchasesController);
