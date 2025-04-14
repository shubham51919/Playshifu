import express from "express"
import { getAwards, getAwardById, createAward, updateAward, deleteAward } from "../controllers/awardController.js"

const router = express.Router()

// GET all awards
router.get("/", getAwards)

// GET a single award
router.get("/:id", getAwardById)

// POST a new award
router.post("/", createAward)

// PATCH/UPDATE an award
router.patch("/:id", updateAward)

// DELETE an award
router.delete("/:id", deleteAward)

export default router
