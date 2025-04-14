import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
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

export default function ProductCard({ id, image, title, price, salePrice, rating, discount }: ProductCardProps) {
    // Calculate discount percentage if not provided
    const discountLabel =
        discount || (salePrice && price > salePrice ? `${Math.round(((price - salePrice) / price) * 100)}% OFF` : null)

    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative">
                {discountLabel && <Badge className="absolute top-3 left-2 bg-red-500 hover:bg-red-600">{discountLabel}</Badge>}
                <Link href={`/product/${id}`}>
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        width={150}
                        height={300}
                        className="w-full h-[290px] rounded-[30px] object-contain p-2"
                    />
                </Link>
                {rating && (
                    <div className="px-3 py-2 absolute bottom-6 left-4 bg-white rounded-[40px] hover:bg-white-600 flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-1">{rating.toFixed(1) + ' | 2000'}</span>
                    </div>
                )}
            </div>
            <div className="p-3">
                <div className="flex justify-between items-start mb-1">
                    <div className="flex gap-4 items-center">
                        <p className="text-[rgb(18,152,51)] font-bold text-lg">
                            Now ${salePrice ? salePrice.toFixed(2) : price.toFixed(2)}
                        </p>
                        {salePrice && salePrice < price && (
                            <p className="font-bold text-sm text-gray-400 line-through">${price.toFixed(2)}</p>
                        )}
                    </div>
                </div>
                <Link href={`/product/${id}`}>
                    <h3 className="font-medium text-sm mb-2">{title}</h3>
                </Link>
                <p className="text-xs text-gray-500 mb-2">A wonderful educational toy for children of all ages</p>
                <Button className="w-full text-xs text-black h-8 bg-[rgb(244,217,102)] hover:bg-[rgb(260,217,102)]">
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}
