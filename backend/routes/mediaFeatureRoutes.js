import express from "express"
import {
  getMediaFeatures,
  getMediaFeatureById,
  createMediaFeature,
  updateMediaFeature,
  deleteMediaFeature,
} from "../controllers/mediaFeatureController.js"

const router = express.Router()

// GET all media features
router.get("/", getMediaFeatures)

// GET a single media feature
router.get("/:id", getMediaFeatureById)

// POST a new media feature
router.post("/", createMediaFeature)

// PATCH/UPDATE a media feature
router.patch("/:id", updateMediaFeature)

// DELETE a media feature
router.delete("/:id", deleteMediaFeature)

export default router
