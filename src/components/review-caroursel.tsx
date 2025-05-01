"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MouseEvent, TouchEvent } from 'react';
interface Testimonial {
    _id: string
    username: string
    text: string
    image: string
    rating: number
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials = [] }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(4)
    const [isMobile, setIsMobile] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Default testimonials if none are provided from the API
    const defaultTestimonials = [
        {
            _id: "1",
            username: "@reddysameera",
            text: "Just got the best Diwali gift for her son! What are you waiting for?",
            image: "/images/review1.png",
            rating: 5,
        },
        {
            _id: "2",
            username: "@johndoe",
            text: "My kids love these educational toys. They learn while having fun!",
            image: "/images/review1.png",
            rating: 4,
        },
    ]

    // Use provided testimonials or fallback to defaults
    const reviewTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

    // Calculate visible testimonials based on screen size
    const updateVisibleCount = () => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth
            const mobile = width < 640
            setIsMobile(mobile)

            if (mobile) setVisibleCount(1.5) // Show 1.5 cards on mobile
            else if (width < 1024) setVisibleCount(2)
            else setVisibleCount(4.5)

            // Force re-render to ensure proper layout
            if (containerRef.current) {
                containerRef.current.scrollLeft = 0
            }
        }
    }

    useEffect(() => {
        updateVisibleCount()
        window.addEventListener('resize', updateVisibleCount)
        return () => window.removeEventListener('resize', updateVisibleCount)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewTestimonials.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewTestimonials.length - 1 : prevIndex - 1))
    }

    // Get visible testimonials with circular wrapping and buffer items
    const getVisibleTestimonials = () => {
        if (reviewTestimonials.length === 0) return []

        // Add buffer items to ensure smooth circular scrolling
        const displayCount = Math.ceil(visibleCount) + 2
        const startIdx = ((currentIndex % reviewTestimonials.length) + reviewTestimonials.length) % reviewTestimonials.length

        // Create a window of testimonials that wraps around if needed
        let visibleItems = []
        for (let i = 0; i < displayCount; i++) {
            const idx = (startIdx + i) % reviewTestimonials.length
            visibleItems.push(reviewTestimonials[idx])
        }

        return visibleItems
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

        // Snap to nearest testimonial after sliding
        if (containerRef.current) {
            const itemWidth = containerRef.current.clientWidth / visibleCount
            const scrollPosition = containerRef.current.scrollLeft
            const itemIndex = Math.round(scrollPosition / itemWidth)

            // Smooth scroll to the nearest testimonial
            containerRef.current.scrollTo({
                left: itemIndex * itemWidth,
                behavior: 'smooth'
            })

            // Update the current index
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + itemIndex) % reviewTestimonials.length
                return newIndex >= 0 ? newIndex : reviewTestimonials.length + newIndex
            })
        }
    }

    // Calculate testimonial width percentage
    const testimonialWidthPercentage = 100 / visibleCount

    // Get the testimonials to display
    const visibleTestimonials = getVisibleTestimonials()

    return (
        <div className="w-full px-0 px-4">
            <h2 className="font-medium text-[23px] mt-2 md:text-[25px] md:mb-6 md:ml-4 ">What kids, parents and teachers love</h2>

            <div className="relative">
                <div className="flex justify-between items-center">
                    {/* Keep the original positioning for the left arrow */}
                    {/* Hide arrows on mobile */}
                    {!isMobile && (
                        <button
                            onClick={prevSlide}
                            className="border border-black absolute left-0 z-10 bg-white rounded-full p-2 shadow-md"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    {/* Testimonials Container */}
                    <div
                        ref={containerRef}
                        className={`flex gap-4 md:gap-[60px] ${isMobile ? "overflow-x-auto" : "overflow-hidden"} ${isMobile ? "mr-4 ml-4" : "mr-12 ml-12 md:ml-[90px]"}`}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleDragEnd}
                        style={{
                            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                            scrollbarWidth: 'none', // Hide scrollbar in Firefox
                            msOverflowStyle: 'none', // Hide scrollbar in IE
                        }}
                    >
                        <div
                            className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-[40px]"
                            style={{
                                transform: isMobile ? 'none' : `translateX(-${currentIndex * (100 / reviewTestimonials.length)}%)`,
                            }}
                        >
                            {visibleTestimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial._id}-${index}`}
                                    className={`flex-none p-2`}
                                    style={isMobile ? { width: '55%' } : { width: `${testimonialWidthPercentage}%` }}
                                >
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt="Testimonial"
                                            className="w-full h-70 object-cover p-4 rounded-[25px]"
                                        />
                                        <div className="p-3">
                                            <span className=" text-[12px] "><span className="text-[#822382]">{testimonial.username}</span> {testimonial.text}</span>

                                        </div>
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

                    {/* Keep the original positioning for the right arrow */}
                    {/* Hide arrows on mobile */}
                    {!isMobile && (
                        <button
                            onClick={nextSlide}
                            className="border border-black absolute md:right-5 right-0 z-10 bg-white rounded-full p-2 shadow-md bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}