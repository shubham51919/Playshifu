import express from "express"
import {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
} from "../controllers/partnerController.js"

const router = express.Router()

// GET all partners
router.get("/", getPartners)

// GET a single partner
router.get("/:id", getPartnerById)

// POST a new partner
router.post("/", createPartner)

// PATCH/UPDATE a partner
router.patch("/:id", updatePartner)

// DELETE a partner
router.delete("/:id", deletePartner)

export default router
