import mongoose from "mongoose"
import dotenv from "dotenv"
import Product from "../models/Product.js"
import Category from "../models/Category.js"
import AgeGroup from "../models/AgeGroup.js"
import Testimonial from "../models/Testimonial.js"
import MediaFeature from "../models/MediaFeature.js"
import Award from "../models/Award.js"
import Banner from "../models/Banner.js"
import Partner from "../models/Partner.js"

// Load environment variables
dotenv.config()

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB for seeding"))
    .catch((err) => {
        console.error("MongoDB connection error:", err)
        process.exit(1)
    })

// Sample data
export const ageGroups = [
    {
        age: "0-2",
        color: "bg-[#822382]",
        textColor: "text-white",
        slug: "0-2-years",
    },
    {
        age: "3-5",
        color: "bg-[#822382]",
        textColor: "text-white",
        slug: "3-5-years",
    },
    {
        age: "6-8",
        color: "bg-[#822382]",
        textColor: "text-white",
        slug: "6-8-years",
    },
    {
        age: "9-12",
        color: "bg-[#822382]",
        textColor: "text-white",
        slug: "9-12-years",
    },
    {
        age: "12+",
        color: "bg-[#822382]",
        textColor: "text-white",
        slug: "12-plus-years",
    },
]

export const categories = [
    {
        name: "Problem Solving",
        description: "Toys that help develop problem-solving skills",
        image: "/images/category-problem-solving.png",
        slug: "problem-solving",
    },
    {
        name: "Geography",
        description: "Learn about the world with geography toys",
        image: "/images/category-geography.png",
        slug: "geography",
    },
    {
        name: "Language & Numbers",
        description: "Develop language and math skills",
        image: "/images/category-language-numbers.png",
        slug: "language-numbers",
    },
    {
        name: "STEM",
        description: "Science, Technology, Engineering, and Mathematics toys",
        image: "/images/category-stem.png",
        slug: "stem",
    },
    {
        name: "Coding",
        description: "Learn coding concepts through play",
        image: "/images/category-coding.png",
        slug: "coding",
    },
]

export const products = [
    {
        title: "Letters",
        description: "Educational letter blocks for early learning",
        price: 29.99,
        salePrice: 19.99,
        image: "/images/card.png",
        rating: 4.5,
        featured: true,
    },
    {
        title: "Smart Globe",
        description: "Interactive globe with voice recognition",
        price: 39.99,
        salePrice: 29.99,
        image: "/images/product1.png",
        rating: 4.8,
        featured: true,
    },
    {
        title: "Puzzle Set",
        description: "Set of educational puzzles for different age groups",
        price: 24.99,
        salePrice: 18.99,
        image: "/images/product2.png",
        rating: 4.7,
        featured: false,
    },
    {
        title: "STEM Kit",
        description: "Comprehensive STEM learning kit with experiments",
        price: 49.99,
        salePrice: 39.99,
        image: "/images/product3.png",
        rating: 4.9,
        featured: true,
    },
    {
        title: "Building Blocks",
        description: "Creative building blocks for imaginative play",
        price: 34.99,
        salePrice: 24.99,
        image: "/images/card.png",
        rating: 4.6,
        featured: false,
    },
]

export const testimonials = [
    {
        username: "@reddysameera",
        text: "Just got the best Diwali gift for her son! What are you waiting for?",
        image: "/images/review1.png",
        rating: 5,
        featured: true,
    },
    {
        username: "@johndoe",
        text: "My kids love these educational toys. They learn while having fun!",
        image: "/images/review2.png",
        rating: 4,
        featured: true,
    },
    {
        username: "@parentof3",
        text: "These toys have been a game-changer for my children's development.",
        image: "/images/review3.png",
        rating: 5,
        featured: true,
    },
    {
        username: "@teachermom",
        text: "As both a teacher and a parent, I highly recommend these educational toys.",
        image: "/images/review4.png",
        rating: 5,
        featured: true,
    },
]

export const mediaFeatures = [
    {
        title: "AS SEEN ON",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, fringilla ac mi quis",
        videoThumbnail: "/images/videoThumbnail.png",
        videoUrl: "https://example.com/video1",
        networks: ["FOX11", "NBC"],
        featured: true,
    },
    {
        title: "AS SEEN ON",
        description: "Another featured video with different content showcasing our educational toys",
        videoThumbnail: "/images/videoThumbnail.png",
        videoUrl: "https://example.com/video2",
        networks: ["ABC", "CNN"],
        featured: true,
    },
    {
        title: "FEATURED IN",
        description: "Watch our toys being demonstrated on this popular morning show",
        videoThumbnail: "/images/videoThumbnail.png",
        videoUrl: "https://example.com/video3",
        networks: ["CBS", "ESPN"],
        featured: true,
    },
]

export const awards = [
    {
        name: "Best Educational Toy",
        image: "/images/award1.png",
        description: "Awarded for excellence in educational toy design",
        year: 2023,
    },
    {
        name: "Innovation Award",
        image: "/images/award2.png",
        description: "Recognized for innovative approach to learning through play",
        year: 2022,
    },
    {
        name: "Parent's Choice",
        image: "/images/award3.png",
        description: "Selected by parents as a top educational toy",
        year: 2023,
    },
    {
        name: "STEM Excellence",
        image: "/images/award4.png",
        description: "Awarded for outstanding STEM educational value",
        year: 2021,
    },
    {
        name: "Child Development",
        image: "/images/award5.png",
        description: "Recognized for positive impact on child development",
        year: 2022,
    },
    {
        name: "Design Award",
        image: "/images/award6.png",
        description: "Awarded for exceptional product design",
        year: 2023,
    },
]

export const banners = [
    {
        title: "Power up your child's skills with our super toys",
        buttonText: "Shop now",
        color: "bg-yellow-300",
        image: "/images/banner2.png",
        imageAlt: "Colorful educational toys",
        link: "/shop",
        active: true,
        order: 1,
    },
    {
        title: "STEM toys that make learning fun",
        buttonText: "Explore STEM",
        color: "bg-yellow-300",
        image: "/images/banner2.png",
        imageAlt: "Science and robotics kits",
        link: "/category/stem",
        active: true,
        order: 2,
    },
    {
        title: "Sensory toys for development",
        buttonText: "Discover more",
        color: "bg-yellow-300",
        image: "/images/banner2.png",
        imageAlt: "Sensory toys collection",
        link: "/category/sensory",
        active: true,
        order: 3,
    },
    {
        title: "New arrivals: Spring collection",
        buttonText: "See what's new",
        color: "bg-yellow-300",
        image: "/images/banner2.png",
        imageAlt: "New spring toys",
        link: "/new-arrivals",
        active: true,
        order: 4,
    },
]

export const partners = [
    {
        name: "Amazon",
        image: "/images/available1.png",
        link: "https://amazon.com",
        order: 1,
    },
    {
        name: "Walmart",
        image: "/images/available2.png",
        link: "https://walmart.com",
        order: 2,
    },
    {
        name: "Target",
        image: "/images/available3.png",
        link: "https://target.com",
        order: 3,
    },
    {
        name: "Toys R Us",
        image: "/images/available4.png",
        link: "https://toysrus.com",
        order: 4,
    },
    {
        name: "Best Buy",
        image: "/images/available5.png",
        link: "https://bestbuy.com",
        order: 5,
    },
]

// Seed function
const seedDatabase = async () => {
    try {
        // Clear existing data
        await Promise.all([
            Product.deleteMany({}),
            Category.deleteMany({}),
            AgeGroup.deleteMany({}),
            Testimonial.deleteMany({}),
            MediaFeature.deleteMany({}),
            Award.deleteMany({}),
            Banner.deleteMany({}),
            Partner.deleteMany({}),
        ])

        console.log("Cleared existing data")

        // Insert age groups
        const createdAgeGroups = await AgeGroup.insertMany(ageGroups)
        console.log(`Inserted ${createdAgeGroups.length} age groups`)

        // Insert categories
        const createdCategories = await Category.insertMany(categories)
        console.log(`Inserted ${createdCategories.length} categories`)

        // Insert products with references to categories and age groups
        const productsWithRefs = products.map((product, index) => {
            return {
                ...product,
                category: createdCategories[index % createdCategories.length]._id,
                ageGroup: createdAgeGroups[index % createdAgeGroups.length]._id,
            }
        })

        const createdProducts = await Product.insertMany(productsWithRefs)
        console.log(`Inserted ${createdProducts.length} products`)

        // Insert testimonials
        const createdTestimonials = await Testimonial.insertMany(testimonials)
        console.log(`Inserted ${createdTestimonials.length} testimonials`)

        // Insert media features
        const createdMediaFeatures = await MediaFeature.insertMany(mediaFeatures)
        console.log(`Inserted ${createdMediaFeatures.length} media features`)

        // Insert awards
        const createdAwards = await Award.insertMany(awards)
        console.log(`Inserted ${createdAwards.length} awards`)

        // Insert banners
        const createdBanners = await Banner.insertMany(banners)
        console.log(`Inserted ${createdBanners.length} banners`)

        // Insert partners
        const createdPartners = await Partner.insertMany(partners)
        console.log(`Inserted ${createdPartners.length} partners`)

        console.log("Database seeded successfully")
    } catch (error) {
        console.error("Error seeding database:", error)
    } finally {
        // Close the connection
        mongoose.connection.close()
    }
}

// Run the seed function
seedDatabase()
