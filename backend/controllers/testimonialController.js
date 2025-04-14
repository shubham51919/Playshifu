import Testimonial from "../models/Testimonial.js"

// Get all testimonials
export const getTestimonials = async (req, res) => {
  try {
    const { featured, limit = 10, page = 1 } = req.query

    const query = {}
    if (featured) query.featured = featured === "true"

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const testimonials = await Testimonial.find(query).limit(Number.parseInt(limit)).skip(skip).sort({ createdAt: -1 })

    const total = await Testimonial.countDocuments(query)

    res.status(200).json({
      testimonials,
      totalPages: Math.ceil(total / Number.parseInt(limit)),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single testimonial by ID
export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id)

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" })
    }

    res.status(200).json(testimonial)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new testimonial
export const createTestimonial = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body)
    const savedTestimonial = await testimonial.save()
    res.status(201).json(savedTestimonial)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" })
    }

    res.status(200).json(updatedTestimonial)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id)

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" })
    }

    res.status(200).json({ message: "Testimonial deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
