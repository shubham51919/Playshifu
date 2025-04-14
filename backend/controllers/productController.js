import Product from "../models/Product.js"

// Get all products
export const getProducts = async (req, res) => {
  try {
    const { category, ageGroup, featured, limit = 10, page = 1 } = req.query

    const query = {}

    if (category) query.category = category
    if (ageGroup) query.ageGroup = ageGroup
    if (featured) query.featured = featured === "true"

    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const products = await Product.find(query)
      .limit(Number.parseInt(limit))
      .skip(skip)
      .populate("category")
      .populate("ageGroup")
      .sort({ createdAt: -1 })

    const total = await Product.countDocuments(query)

    res.status(200).json({
      products,
      totalPages: Math.ceil(total / Number.parseInt(limit)),
      currentPage: Number.parseInt(page),
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category").populate("ageGroup")

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
