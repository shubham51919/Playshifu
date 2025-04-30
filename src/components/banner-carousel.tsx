"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BannerSlide {
    _id: string
    title: string
    buttonText: string
    color: string
    image: string
    imageAlt: string
    link: string
}

interface ToyShopCarouselProps {
    slides: BannerSlide[]
}

export default function ToyShopCarousel({ slides = [] }: ToyShopCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Default slides if none are provided from the API
    const defaultSlides = [
        {
            _id: "1",
            title: "Power up your child's skills with our super toys",
            buttonText: "Shop now",
            color: "bg-yellow-300",
            image: "/images/banner2.png",
            imageAlt: "Colorful educational toys",
            link: "/shop",
        },
        {
            _id: "2",
            title: "STEM toys that make learning fun",
            buttonText: "Explore STEM",
            color: "bg-blue-200",
            image: "/images/banner2.png",
            imageAlt: "Science and robotics kits",
            link: "/category/stem",
        },
    ]

    // Use provided slides or fallback to defaults
    const bannerSlides = slides.length > 0 ? slides : defaultSlides

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [bannerSlides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
    }

    return (
        <div className="flex flex-col gap-2">
            {/* Carousel slider */}
            <div className="relative h-[25vh] sm:h-[25vh] md:h-[40vh] lg:h-[55vh] overflow-hidden ">
                {bannerSlides.map((slide, index) => (
                    <div
                        key={slide._id || index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
                       ${currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"}
                       ${slide.color} flex items-center`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full cover "
                        />
                    </div>
                ))}

                {/* Navigation buttons */}
                {/* <button
                    onClick={prevSlide}
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100 transition-all"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100 transition-all"
                    aria-label="Next slide"
                >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button> */}
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-1 sm:space-x-2 md:mt-6 mt-1 md:gap-2 gap-1">
                {bannerSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`cursor-pointer rounded-full transition-all ${currentSlide === index ? "md:h-2.5 bg-[#822382] md:w-2.5 h-2 w-2" : "md:h-2.5 border border-[#822382] md:w-2.5 w-2 h-2"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
