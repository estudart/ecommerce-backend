import {
  getProductDetails,
  getProducts,
  newProduct,
} from "../controllers/productControllers.js";
import express from "express";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);
router.route("/products/:id").get(getProductDetails);

export default router;
