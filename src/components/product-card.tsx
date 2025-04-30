import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
    id: string
    image: string
    title: string
    price: number
    salePrice?: number
    rating?: number
    discount?: string
}

export default function ProductCard({
    id,
    image,
    title,
    price,
    salePrice,
    rating,
    discount,
}: ProductCardProps) {
    const discountLabel =
        discount ||
        (salePrice && price > salePrice
            ? `${Math.round(((price - salePrice) / price) * 100)}% OFF`
            : null)

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden md:w-[300px]">
            <div className="relative">
                {/* {discountLabel && (
                    <Badge className="absolute top-2 left-2 text-[10px] px-1 py-0.5 bg-red-500 hover:bg-red-600">
                        {discountLabel}
                    </Badge>
                )} */}
                <Link href={`/product/${id}`}>
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        width={130}
                        height={300}
                        className="w-full h-[200px] md:h-[290px] rounded-[20px] object-cover p-2"
                    />
                </Link>
                {rating && (
                    <div className="absolute bottom-3 left-3 flex items-center bg-white px-2 py-1 rounded-full hover:bg-gray-100 md:bottom-5 md:left-4">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-[10px] md:text-xs">
                            {rating.toFixed(1)} | 2000
                        </span>
                    </div>
                )}
            </div>
            <div className="p-2 md:p-2">
                <div className="flex justify-between items-start mb-1">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-3 items-center">

                            <p className="font-medium text-lg text-[rgb(86,130,52)] md:text-[27px]">
                                Now ${salePrice ? salePrice.toFixed(2) : price.toFixed(2)}
                            </p>
                            {salePrice && salePrice < price && (
                                <p className="text-sm font-medium text-[rgb(199,199,199)] line-through md:text-[15px]">
                                    ${price.toFixed(2)}
                                </p>
                            )}
                        </div>
                        <button className="mr-3 hover:text-red-500">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
                        </button>
                    </div>
                </div>
                <Link
                    href={`/product/${id}`}
                    className="flex items-center gap-2"
                >
                    <h3 className="font-normal text-lg md:text-[27px] mb-1">
                        {title}
                    </h3>
                    <img
                        src={"/images/plugo.png"}
                        className="h-6 w-16 md:h-[30px] md:w-[80px]"
                    />
                </Link>
                <p className="text-[10px] text-gray-500 mb-4 md:text-[12px]">
                    Learn Math the Right way, the fun hands on way. Hands on play
                    with story based games. Adaptive puzzles with challanges
                </p>
                <Button className="cursor-pointer w-full rounded-[20px] py-3 text-sm text-black bg-[rgb(244,217,102)] hover:bg-[rgb(260,217,102)] md:py-5 md:text-[14px] h-8">
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}
