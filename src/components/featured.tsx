"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function MediaFeatureSection({ mediaFeatures = [] }) {
    const [current, setCurrent] = useState(0)
    const defaults = [ /* …same defaults…*/]
    const items = mediaFeatures.length ? mediaFeatures : defaults
    const prev = () => setCurrent(i => i === 0 ? items.length - 1 : i - 1)
    const next = () => setCurrent(i => (i + 1) % items.length)
    const { videoThumbnail, title, description, networks } = items[current]

    return (
        <div className="relative py-12 px-4 max-w-7xl mx-auto">
            {/* Prev/Next buttons */}
            <button onClick={prev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
                <ChevronLeft size={24} />
            </button>
            <button onClick={next}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
                <ChevronRight size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Video */}
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img src={videoThumbnail} alt="" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 transition">
                            <Play size={32} />
                        </button>
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-700">{title}</h2>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                        {networks.map(net => (
                            <span key={net} className="text-2xl font-black">{net}</span>
                        ))}
                    </div>
                    <p className="text-lg text-gray-600">{description}</p>
                </div>
            </div>

            {/* Brand logos */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-4 opacity-70">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-12 w-24">
                        <img src="/images/featuredSub.png" alt="" className="h-full w-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
