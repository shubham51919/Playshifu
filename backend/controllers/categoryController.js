import Category from "../models/Category.js"
import Product from "../models/Product.js"

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 })
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)

    if (!category) {
      return res.status(404).json({ message: "Category not found" })
    }

    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { limit = 10, page = 1 } = req.query

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const products = await Product.find({ category: id })
      .limit(Number.parseInt(limit))
      .skip(skip)
      .sort({ createdAt: -1 })

    const total = await Product.countDocuments({ category: id })

    res.status(200).json({
      products,
      totalPages: Math.ceil(total / Number.parseInt(limit)),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body)
    const savedCategory = await category.save()
    res.status(201).json(savedCategory)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" })
    }

    res.status(200).json(updatedCategory)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params
    const deletedCategory = await Category.findByIdAndDelete(id)

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" })
    }

    // Update products that had this category
    await Product.updateMany({ category: id }, { $unset: { category: "" } })

    res.status(200).json({ message: "Category deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
