import { getProducts } from "../controllers/productControllers.js";
import express from "express";
const router = express.Router();

router.route("/products").get(getProducts);

export default router;
