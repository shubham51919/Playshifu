import express from "express"
import { getBanners, getBannerById, createBanner, updateBanner, deleteBanner } from "../controllers/bannerController.js"

const router = express.Router()

// GET all banners
router.get("/", getBanners)

// GET a single banner
router.get("/:id", getBannerById)

// POST a new banner
router.post("/", createBanner)

// PATCH/UPDATE a banner
router.patch("/:id", updateBanner)

// DELETE a banner
router.delete("/:id", deleteBanner)

export default router
