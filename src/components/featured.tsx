"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function MediaFeatureSection({ mediaFeatures = [] }) {
    const [current, setCurrent] = useState(0)
    const defaults = []
    const items = mediaFeatures.length ? mediaFeatures : defaults
    const prev = () => setCurrent(i => i === 0 ? items.length - 1 : i - 1)
    const next = () => setCurrent(i => (i + 1) % items.length)
    const { videoThumbnail, title, description, networks } = items[current]

    return (
        <div className="relative md:py-12 md:px-4 px-2 max-w-7xl mx-auto">
            {/* Mobile: Title, Fox image, Description at top */}
            <div className="md:hidden w-full md:text-center mb-8">
                <h2 className="md:text-3xl text-xl font-normal text-gray-700 mb-2 md:mb-4">{title}</h2>
                <img src="/images/nbcfox.png" alt="fox" className="mb-6 md:h-[40px] w-[70%] md:w-auto md:mx-auto" />
                <p className="md:text-lg text-sm text-gray-600">{description}</p>
            </div>

            {/* Prev/Next buttons - Desktop */}
            <div className="hidden md:block">
                <button onClick={prev}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-black hover:bg-gray-100 transition-all">
                    <ChevronLeft size={30} />
                </button>
                <button onClick={next}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-black hover:bg-gray-100 transition-all">
                    <ChevronRight size={30} />
                </button>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Mobile navigation and video container */}
                <div className="md:hidden flex flex-col items-center w-full">
                    {/* Video container with absolute positioned buttons */}
                    <div className="relative w-full flex justify-center">
                        {/* Centered video thumbnail */}
                        <div className="w-[82%] rounded-lg overflow-hidden shadow-lg">
                            <img src={videoThumbnail} alt="" className="w-full h-auto" />
                        </div>

                        {/* Absolutely positioned buttons */}
                        <button onClick={prev}
                            className="absolute -left-[4%] top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-10 border border-black hover:bg-gray-100 transition-all">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next}
                            className="absolute -right-[4%] top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-10 border border-black hover:bg-gray-100 transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Video - Only shown on desktop */}
                <div className="hidden md:block relative md:top-6 md:left-18 rounded-lg overflow-hidden shadow-lg md:w-[85%] order-2 md:order-1">
                    <img src={videoThumbnail} alt="" className="w-full h-auto" />
                </div>

                {/* Text - Hidden on mobile since we moved it to top */}
                <div className="hidden md:block h-full relative md:top-6 text-center md:text-left order-1 md:order-2">
                    <h2 className="text-3xl font-normal text-gray-700 md:mb-6">{title}</h2>
                    <img src="/images/nbcfox.png" alt="fox" className="md:mb-8 md:h-[45px] md:w-[80%]" />
                    <p className="text-lg md:text-[22px] text-gray-600 md:w-[85%]">{description}</p>
                </div>
            </div>

            {/* Brand logos */}
            <div className="hidden mt-20 flex flex-wrap justify-center items-center gap-4 opacity-70">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-18 w-30">
                        <img src={`/images/company${i + 1}.png`} alt="" className="h-full w-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}