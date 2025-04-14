"use client"
import { useState } from "react"
import { ChevronLeft, Play } from "lucide-react"

interface MediaFeature {
    _id: string
    title: string
    description: string
    videoThumbnail: string
    videoUrl?: string
    networks: string[]
}

interface MediaFeatureSectionProps {
    mediaFeatures: MediaFeature[]
}

export default function MediaFeatureSection({ mediaFeatures = [] }: MediaFeatureSectionProps) {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

    // Default media features if none are provided from the API
    const defaultMediaFeatures = [
        {
            _id: "1",
            title: "AS SEEN ON",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui tortor, fringilla ac mi quis",
            videoThumbnail: "/images/videoThumbnail.png",
            networks: ["FOX11", "NBC"],
        },
        {
            _id: "2",
            title: "AS SEEN ON",
            description: "Another featured video with different content showcasing our educational toys",
            videoThumbnail: "/images/videoThumbnail.png",
            networks: ["ABC", "CNN"],
        },
    ]

    // Use provided media features or fallback to defaults
    const featuredMedia = mediaFeatures.length > 0 ? mediaFeatures : defaultMediaFeatures

    const nextMedia = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % featuredMedia.length)
    }

    const prevMedia = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? featuredMedia.length - 1 : prevIndex - 1))
    }

    const currentMedia = featuredMedia[currentMediaIndex]

    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="absolute max-w-7xl mx-auto">
                <button
                    onClick={prevMedia}
                    className="relative left-[-5%] top-[25%] bg-white rounded-full p-2 shadow-md"
                    aria-label="Previous media"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                {/* Left side - Video with play button */}
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img src={currentMedia.videoThumbnail || "/placeholder.svg"} alt="Media feature" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 transition-colors duration-300"
                            aria-label="Play video"
                        >
                            <Play size={32} />
                        </button>
                    </div>
                </div>

                {/* Right side - AS SEEN ON section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-700">{currentMedia.title}</h2>

                    <div className="flex items-center gap-4">
                        <div className="text-5xl font-black">
                            FOX<span className="text-black">11</span>
                        </div>
                        <span className="text-purple-700 text-3xl">&</span>
                        <div className="flex items-center">
                            <img src="/images/nbc.png" height="100px" width={'100px'} alt="" />
                            <div className="text-5xl text-5xl font-black">NBC
                            </div>

                        </div>
                    </div>

                    <p className="text-lg text-gray-600">{currentMedia.description}</p>
                </div>
            </div>

            {/* Brand logos section */}
            <div className="mt-16">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 opacity-70">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div key={i} className="h-12 w-24">
                            <img src="/images/featuredSub.png" alt={`Featured ${i}`} className="h-full w-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
