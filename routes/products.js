import {
  deleteProduct,
  getProductDetails,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import express from "express";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/:id").get(getProductDetails);
router.route("/admin/products").post(newProduct);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteProduct);

export default router;
