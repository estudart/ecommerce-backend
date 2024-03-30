import { getProducts, newProduct } from "../controllers/productControllers.js";
import express from "express";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);

export default router;
