"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import ProductCard from "./product-card"
import type { MouseEvent, TouchEvent } from "react"

// Define the Product type
interface Product {
    _id: string
    image: string
    title: string
    price: number
    salePrice?: number
    rating: number
    description?: string
    category?: {
        _id: string
        name: string
    }
    ageGroup?: {
        _id: string
        age: string
    }
}

interface ProductListingsProps {
    products: Product[]
    title?: string
    categoryLink?: string
}

export default function ProductListings({
    products = [],
    title = "",
    categoryLink = "/products",
}: ProductListingsProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [visibleCards, setVisibleCards] = useState(4)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Ensure we have enough products for the carousel to work properly
    // const extendedProducts = products.length > 0
    //     ? [...products, ...products, ...products] // Triple the products array to ensure circular scrolling
    //     : []

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                const width = window.innerWidth
                const mobile = width < 640
                setIsMobile(mobile)

                if (mobile) {
                    setVisibleCards(1.5) // Show 1.5 cards on mobile
                } else if (width < 768) {
                    setVisibleCards(2)
                } else if (width < 1024) {
                    setVisibleCards(3)
                } else if (width < 1400) {
                    setVisibleCards(3.5) // Add a breakpoint for screens around 1355px
                } else {
                    setVisibleCards(4)
                }
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Get the actual products to display based on current index
    const getVisibleProducts = () => {
        if (products.length === 0) return []

        // Adjust the display window based on the current index
        const displayCount = Math.ceil(visibleCards) + 2 // Add buffer cards
        const startIdx = ((currentIndex % products.length) + products.length) % products.length

        // Create a window of products that wraps around if needed
        const visibleProducts = []
        for (let i = 0; i < displayCount; i++) {
            const idx = (startIdx + i) % products.length
            visibleProducts.push(products[idx])
        }

        return visibleProducts
    }

    const navigateNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }

    const navigatePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    }

    // Touch/mouse event handlers for mobile sliding
    const handleMouseDown = (e: MouseEvent) => {
        if (!isMobile || !containerRef.current) return

        setIsDragging(true)
        setStartX(e.pageX - containerRef.current.offsetLeft)
        setScrollLeft(containerRef.current.scrollLeft)
    }

    const handleTouchStart = (e: TouchEvent) => {
        if (!isMobile || !containerRef.current) return

        setIsDragging(true)
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
        setScrollLeft(containerRef.current.scrollLeft)
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !isMobile || !containerRef.current) return

        e.preventDefault()
        const x = e.pageX - containerRef.current.offsetLeft
        const walk = (x - startX) * 2 // Adjust scrolling speed
        containerRef.current.scrollLeft = scrollLeft - walk
    }

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging || !isMobile || !containerRef.current) return

        const x = e.touches[0].pageX - containerRef.current.offsetLeft
        const walk = (x - startX) * 2
        containerRef.current.scrollLeft = scrollLeft - walk
    }

    const handleDragEnd = () => {
        if (!isMobile || !containerRef.current) return

        setIsDragging(false)

        // Snap to nearest card after sliding
        if (containerRef.current) {
            const cardWidth = containerRef.current.clientWidth / visibleCards
            const scrollPosition = containerRef.current.scrollLeft
            const cardIndex = Math.round(scrollPosition / cardWidth)

            // Smooth scroll to the nearest card
            containerRef.current.scrollTo({
                left: cardIndex * cardWidth,
                behavior: "smooth",
            })

            // Update the current index
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + cardIndex) % products.length
                return newIndex >= 0 ? newIndex : products.length + newIndex
            })
        }
    }

    // Show navigation arrows only on desktop
    const showLeftArrow = !isMobile && products.length > visibleCards && currentIndex > 0
    // Always show right arrow on desktop as long as we have more than one product
    const showRightArrow = !isMobile && products.length > 1

    // Calculate card width percentage
    const cardWidthPercentage = 100 / visibleCards

    // If no products, show nothing
    if (products.length === 0) {
        return null
    }

    return (
        <section className="md:px-8 py-5 md:w-[95%]">
            <div className="flex items-center justify-between mb-3">
                <h2 className="font-medium text-[23px] mt-2 md:text-[25px] md:mb-6 ml-4 md:ml-4">{title}</h2>
                <Link
                    href={categoryLink}
                    className="pr-4 underline underline-offset-3 md:pr-8 pb-1 text-sm text-gray-500 flex items-center"
                >
                    View all
                </Link>
            </div>

            <div className="relative">
                {/* Left Navigation Arrow */}
                {showLeftArrow && (
                    <button
                        onClick={navigatePrev}
                        className="border border-black absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all"
                        aria-label="Previous products"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                )}

                {/* Products Container */}
                <div
                    ref={containerRef}
                    className={`overflow-x-hidden ${isMobile ? "overflow-x-auto" : ""}`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleDragEnd}
                    style={{
                        WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
                        scrollbarWidth: "none", // Hide scrollbar in Firefox
                        msOverflowStyle: "none", // Hide scrollbar in IE
                    }}
                >
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: isMobile ? "none" : `translateX(-${currentIndex * cardWidthPercentage}%)`,
                        }}
                    >
                        {getVisibleProducts().map((product, index) => (
                            <div
                                key={`${product._id}-${index}`}
                                className="flex-shrink-0"
                                style={{
                                    width: `${cardWidthPercentage}%`,
                                    padding: "0 8px", // Add consistent padding to prevent overlap
                                }}
                            >
                                <div className="px-1">
                                    {" "}
                                    {/* Reduce horizontal padding */}
                                    <ProductCard
                                        id={product._id}
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        salePrice={product.salePrice}
                                        rating={product.rating}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hide scrollbar with CSS */}
                <style jsx global>{`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {/* Right Navigation Arrow */}
                {showRightArrow && (
                    <button
                        onClick={navigateNext}
                        className="border border-black absolute -right-0 top-[30%] -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all"
                        aria-label="Next products"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                )}
            </div>
        </section>
    )
}
