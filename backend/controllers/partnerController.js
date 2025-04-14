import Partner from "../models/Partner.js"

// Get all partners
export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find().sort({ order: 1 })
    res.status(200).json(partners)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single partner by ID
export const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id)

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" })
    }

    res.status(200).json(partner)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new partner
export const createPartner = async (req, res) => {
  try {
    const partner = new Partner(req.body)
    const savedPartner = await partner.save()
    res.status(201).json(savedPartner)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a partner
export const updatePartner = async (req, res) => {
  try {
    const { id } = req.params
    const updatedPartner = await Partner.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedPartner) {
      return res.status(404).json({ message: "Partner not found" })
    }

    res.status(200).json(updatedPartner)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a partner
export const deletePartner = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPartner = await Partner.findByIdAndDelete(id)

    if (!deletedPartner) {
      return res.status(404).json({ message: "Partner not found" })
    }

    res.status(200).json({ message: "Partner deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
