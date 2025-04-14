import express from "express"
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"

const router = express.Router()

// GET all products
router.get("/", getProducts)

// GET a single product
router.get("/:id", getProductById)

// POST a new product
router.post("/", createProduct)

// PATCH/UPDATE a product
router.patch("/:id", updateProduct)

// DELETE a product
router.delete("/:id", deleteProduct)

export default router
