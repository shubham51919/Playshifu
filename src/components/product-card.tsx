import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
    id: string
    image: string
    title: string
    price: number
    salePrice?: number
    rating?: number
    discount?: string
}

export default function ProductCard({ id, image, title, price, salePrice, rating, discount }: ProductCardProps) {
    return (
        <div className="w-full bg-white rounded-lg overflow-hidden md:max-w-[300px]">
            {" "}
            {/* Change w-[300px] to max-w-[300px] */}
            <div className="relative">
                <Link href={`/product/${id}`}>
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        width={130}
                        height={300}
                        className="w-full h-[180px] md:h-[250px] lg:h-[290px] rounded-[20px] object-cover p-2"
                    />{" "}
                    {/* Add lg breakpoint */}
                </Link>
                {rating && (
                    <div className="absolute bottom-3 left-3 flex items-center bg-white px-2 py-1 rounded-full hover:bg-gray-100 md:bottom-5 md:left-4">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-[10px] md:text-xs">{rating.toFixed(1)} | 2000</span>
                    </div>
                )}
            </div>
            <div className="p-2 md:p-2">
                <div className="flex justify-between items-start mb-1">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2 items-center">
                            {" "}
                            {/* Reduce gap from 3 to 2 */}
                            <p className="font-medium text-base lg:text-lg text-[rgb(86,130,52)] md:text-xl lg:text-[27px]">
                                {" "}
                                {/* Add more responsive text sizes */}
                                Now ${salePrice ? salePrice.toFixed(2) : price.toFixed(2)}
                            </p>
                            {salePrice && salePrice < price && (
                                <p className="text-xs font-medium text-[rgb(199,199,199)] line-through md:text-sm lg:text-[15px]">
                                    {" "}
                                    {/* Add more responsive text sizes */}${price.toFixed(2)}
                                </p>
                            )}
                        </div>
                        <button className="mr-2 hover:text-red-500">
                            {" "}
                            {/* Reduce margin */}
                            <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />{" "}
                            {/* Add more responsive icon sizes */}
                        </button>
                    </div>
                </div>
                <Link href={`/product/${id}`} className="flex items-center gap-2">
                    <h3 className="font-normal text-base md:text-lg lg:text-[27px] mb-1 truncate">{title}</h3>{" "}
                    {/* Add truncate and more responsive text sizes */}
                    <img src={"/images/plugo.png"} className="h-5 w-12 md:h-6 md:w-14 lg:h-[30px] lg:w-[80px]" />{" "}
                    {/* Add more responsive image sizes */}
                </Link>
                <p className="text-[10px] text-gray-500 mb-3 md:text-[12px] line-clamp-2">
                    {" "}
                    {/* Add line-clamp-2 to limit to 2 lines */}
                    Learn Math the Right way, the fun hands on way. Hands on play with story based games. Adaptive puzzles with
                    challanges
                </p>
                <Button className="cursor-pointer w-full rounded-[20px] py-2 text-xs text-black bg-[rgb(244,217,102)] hover:bg-[rgb(260,217,102)] md:py-3 md:text-sm lg:py-5 lg:text-[14px] h-7 md:h-8">
                    {" "}
                    {/* Adjust button height and padding */}
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}
