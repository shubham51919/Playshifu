import Banner from "../models/Banner.js"

// Get all banners
export const getBanners = async (req, res) => {
  try {
    const { active, limit = 10, page = 1 } = req.query

    const query = {}
    if (active) query.active = active === "true"

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const banners = await Banner.find(query).limit(Number.parseInt(limit)).skip(skip).sort({ order: 1, createdAt: -1 })

    const total = await Banner.countDocuments(query)

    res.status(200).json({
      banners,
      totalPages: Math.ceil(total / Number.parseInt(limit)),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single banner by ID
export const getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id)

    if (!banner) {
      return res.status(404).json({ message: "Banner not found" })
    }

    res.status(200).json(banner)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new banner
export const createBanner = async (req, res) => {
  try {
    const banner = new Banner(req.body)
    const savedBanner = await banner.save()
    res.status(201).json(savedBanner)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a banner
export const updateBanner = async (req, res) => {
  try {
    const { id } = req.params
    const updatedBanner = await Banner.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" })
    }

    res.status(200).json(updatedBanner)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a banner
export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params
    const deletedBanner = await Banner.findByIdAndDelete(id)

    if (!deletedBanner) {
      return res.status(404).json({ message: "Banner not found" })
    }

    res.status(200).json({ message: "Banner deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
