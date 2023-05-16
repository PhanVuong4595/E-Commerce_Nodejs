import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product";

const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/products", verifyAccessToken, isAdmin, createProduct);
router.get("/products", getProducts);

router.put("/products/:id", verifyAccessToken, isAdmin, updateProduct);
router.delete("/products/:id", verifyAccessToken, isAdmin, deleteProduct);
router.get("/products/:id", getProduct);

export default router;
