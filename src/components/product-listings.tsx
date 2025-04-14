"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import ProductCard from "./product-card"

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
    const [scrollPosition, setScrollPosition] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [visibleCards, setVisibleCards] = useState(4)
    const [cardWidth, setCardWidth] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Calculate visible cards based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                const width = window.innerWidth
                if (width < 640) {
                    // mobile
                    setVisibleCards(1)
                } else if (width < 768) {
                    // small tablets
                    setVisibleCards(2)
                } else if (width < 1024) {
                    // tablets
                    setVisibleCards(3)
                } else {
                    // laptops and bigger
                    setVisibleCards(4)
                }

                if (containerRef.current) {
                    const containerWidth = containerRef.current.clientWidth
                    const calculatedCardWidth = containerWidth / visibleCards
                    setCardWidth(calculatedCardWidth)

                    // Calculate max scroll distance
                    const totalScrollWidth = calculatedCardWidth * products.length
                    setMaxScroll(Math.max(0, totalScrollWidth - containerWidth))
                }
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [products.length, visibleCards])

    const scrollNext = () => {
        const newPosition = Math.min(scrollPosition + cardWidth, maxScroll)
        setScrollPosition(newPosition)
    }

    const scrollPrev = () => {
        const newPosition = Math.max(scrollPosition - cardWidth, 0)
        setScrollPosition(newPosition)
    }

    const showLeftArrow = scrollPosition > 0
    const showRightArrow = scrollPosition < maxScroll && products.length > visibleCards

    // If no products, show a placeholder or return null
    if (products.length === 0) {
        return null
    }

    return (
        <section className="px-4 py-5">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold ml-5">{title}</h2>
                <Link href={categoryLink} className="text-sm text-gray-500 flex items-center">
                    See all <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="relative">
                {/* Left Navigation Arrow */}
                {showLeftArrow && (
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all"
                        aria-label="Previous products"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                )}

                {/* Products Container */}
                <div ref={containerRef} className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${scrollPosition}px)` }}
                    >
                        {products.map((product) => (
                            <div key={product._id} className="flex-shrink-0" style={{ width: `${100 / visibleCards}%` }}>
                                <div className="px-2">
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

                {/* Right Navigation Arrow */}
                {showRightArrow && (
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all"
                        aria-label="Next products"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                )}
            </div>
        </section>
    )
}
