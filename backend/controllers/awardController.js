import Award from "../models/Award.js"

// Get all awards
export const getAwards = async (req, res) => {
  try {
    const awards = await Award.find().sort({ year: -1 })
    res.status(200).json(awards)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single award by ID
export const getAwardById = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id)

    if (!award) {
      return res.status(404).json({ message: "Award not found" })
    }

    res.status(200).json(award)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new award
export const createAward = async (req, res) => {
  try {
    const award = new Award(req.body)
    const savedAward = await award.save()
    res.status(201).json(savedAward)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update an award
export const updateAward = async (req, res) => {
  try {
    const { id } = req.params
    const updatedAward = await Award.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedAward) {
      return res.status(404).json({ message: "Award not found" })
    }

    res.status(200).json(updatedAward)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete an award
export const deleteAward = async (req, res) => {
  try {
    const { id } = req.params
    const deletedAward = await Award.findByIdAndDelete(id)

    if (!deletedAward) {
      return res.status(404).json({ message: "Award not found" })
    }

    res.status(200).json({ message: "Award deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
