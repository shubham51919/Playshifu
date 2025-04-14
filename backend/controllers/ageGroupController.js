import AgeGroup from "../models/AgeGroup.js"
import Product from "../models/Product.js"

// Get all age groups
export const getAgeGroups = async (req, res) => {
  try {
    const ageGroups = await AgeGroup.find().sort({ age: 1 })
    res.status(200).json(ageGroups)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single age group by ID
export const getAgeGroupById = async (req, res) => {
  try {
    const ageGroup = await AgeGroup.findById(req.params.id)

    if (!ageGroup) {
      return res.status(404).json({ message: "Age group not found" })
    }

    res.status(200).json(ageGroup)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get products by age group
export const getProductsByAgeGroup = async (req, res) => {
  try {
    const { id } = req.params
    const { limit = 10, page = 1 } = req.query

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const products = await Product.find({ ageGroup: id })
      .limit(Number.parseInt(limit))
      .skip(skip)
      .sort({ createdAt: -1 })

    const total = await Product.countDocuments({ ageGroup: id })

    res.status(200).json({
      products,
      totalPages: Math.ceil(total / Number.parseInt(limit)),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new age group
export const createAgeGroup = async (req, res) => {
  try {
    const ageGroup = new AgeGroup(req.body)
    const savedAgeGroup = await ageGroup.save()
    res.status(201).json(savedAgeGroup)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update an age group
export const updateAgeGroup = async (req, res) => {
  try {
    const { id } = req.params
    const updatedAgeGroup = await AgeGroup.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedAgeGroup) {
      return res.status(404).json({ message: "Age group not found" })
    }

    res.status(200).json(updatedAgeGroup)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete an age group
export const deleteAgeGroup = async (req, res) => {
  try {
    const { id } = req.params
    const deletedAgeGroup = await AgeGroup.findByIdAndDelete(id)

    if (!deletedAgeGroup) {
      return res.status(404).json({ message: "Age group not found" })
    }

    // Update products that had this age group
    await Product.updateMany({ ageGroup: id }, { $unset: { ageGroup: "" } })

    res.status(200).json({ message: "Age group deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
