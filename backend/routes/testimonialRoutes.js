import express from "express"
import {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js"

const router = express.Router()

// GET all testimonials
router.get("/", getTestimonials)

// GET a single testimonial
router.get("/:id", getTestimonialById)

// POST a new testimonial
router.post("/", createTestimonial)

// PATCH/UPDATE a testimonial
router.patch("/:id", updateTestimonial)

// DELETE a testimonial
router.delete("/:id", deleteTestimonial)

export default router
