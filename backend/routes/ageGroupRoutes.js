import express from "express"
import {
  getAgeGroups,
  getAgeGroupById,
  getProductsByAgeGroup,
  createAgeGroup,
  updateAgeGroup,
  deleteAgeGroup,
} from "../controllers/ageGroupController.js"

const router = express.Router()

// GET all age groups
router.get("/", getAgeGroups)

// GET a single age group
router.get("/:id", getAgeGroupById)

// GET products by age group
router.get("/:id/products", getProductsByAgeGroup)

// POST a new age group
router.post("/", createAgeGroup)

// PATCH/UPDATE an age group
router.patch("/:id", updateAgeGroup)

// DELETE an age group
router.delete("/:id", deleteAgeGroup)

export default router
