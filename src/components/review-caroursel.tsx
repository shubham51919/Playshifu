"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewTestimonials.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewTestimonials.length - 1 : prevIndex - 1))
    }

    // Calculate visible testimonials based on screen size
    const getVisibleCount = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 1
            if (window.innerWidth < 1024) return 2
            return 4
        }
        return 4 // Default for SSR
    }

    const visibleCount = typeof window !== "undefined" ? getVisibleCount() : 4

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What kids, parents and teachers love</h2>

            <div className="relative">
                <div className="flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-4 overflow-hidden mx-12">
                        {reviewTestimonials.map((testimonial, index) => {
                            // Calculate if this testimonial should be visible
                            const isVisible = index >= currentIndex && index < currentIndex + visibleCount

                            return (
                                <div
                                    key={testimonial._id}
                                    className={`flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 hidden"
                                        }`}
                                >
                                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt="Testimonial"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-3">
                                            <span className="text-purple-600 font-medium">{testimonial.username}</span>
                                            <p className="text-gray-700 text-sm mt-1">{testimonial.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}
