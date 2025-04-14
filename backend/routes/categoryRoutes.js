import express from "express"
import {
  getCategories,
  getCategoryById,
  getProductsByCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js"

const router = express.Router()

// GET all categories
router.get("/", getCategories)

// GET a single category
router.get("/:id", getCategoryById)

// GET products by category
router.get("/:id/products", getProductsByCategory)

// POST a new category
router.post("/", createCategory)

// PATCH/UPDATE a category
router.patch("/:id", updateCategory)

// DELETE a category
router.delete("/:id", deleteCategory)

export default router
