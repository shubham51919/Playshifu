import MediaFeature from "../models/MediaFeature.js"

// Get all media features
export const getMediaFeatures = async (req, res) => {
  try {
    const { featured, limit = 10, page = 1 } = req.query

    const query = {}
    if (featured) query.featured = featured === "true"

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const mediaFeatures = await MediaFeature.find(query)
      .limit(Number.parseInt(limit))
      .skip(skip)
      .sort({ createdAt: -1 })

    const total = await MediaFeature.countDocuments(query)

    res.status(200).json({
      mediaFeatures,
      totalPages: Math.ceil(total / Number.parseInt(limit)),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single media feature by ID
export const getMediaFeatureById = async (req, res) => {
  try {
    const mediaFeature = await MediaFeature.findById(req.params.id)

    if (!mediaFeature) {
      return res.status(404).json({ message: "Media feature not found" })
    }

    res.status(200).json(mediaFeature)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new media feature
export const createMediaFeature = async (req, res) => {
  try {
    const mediaFeature = new MediaFeature(req.body)
    const savedMediaFeature = await mediaFeature.save()
    res.status(201).json(savedMediaFeature)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a media feature
export const updateMediaFeature = async (req, res) => {
  try {
    const { id } = req.params
    const updatedMediaFeature = await MediaFeature.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedMediaFeature) {
      return res.status(404).json({ message: "Media feature not found" })
    }

    res.status(200).json(updatedMediaFeature)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a media feature
export const deleteMediaFeature = async (req, res) => {
  try {
    const { id } = req.params
    const deletedMediaFeature = await MediaFeature.findByIdAndDelete(id)

    if (!deletedMediaFeature) {
      return res.status(404).json({ message: "Media feature not found" })
    }

    res.status(200).json({ message: "Media feature deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
