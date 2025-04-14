import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import ageGroupRoutes from "./routes/ageGroupRoutes.js"
import testimonialRoutes from "./routes/testimonialRoutes.js"
import mediaFeatureRoutes from "./routes/mediaFeatureRoutes.js"
import awardRoutes from "./routes/awardRoutes.js"
import bannerRoutes from "./routes/bannerRoutes.js"
import partnerRoutes from "./routes/partnerRoutes.js"

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/age-groups", ageGroupRoutes)
app.use("/api/testimonials", testimonialRoutes)
app.use("/api/media-features", mediaFeatureRoutes)
app.use("/api/awards", awardRoutes)
app.use("/api/banners", bannerRoutes)
app.use("/api/partners", partnerRoutes)

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" })
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

export default app
