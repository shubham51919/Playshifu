import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
    image: string
    title: string
    price: number
    salePrice: number
}

export default function CategoryCard({ image, title, price, salePrice }: CategoryCardProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden border">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={150}
                    height={120}
                    className="w-full h-[100px] object-contain p-2"
                />
            </div>
            <div className="p-3">
                <h3 className="font-medium text-sm mb-1">{title}</h3>
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <p className="text-gray-500 text-xs line-through">Now ${price.toFixed(2)}</p>
                        <p className="font-medium text-sm">${salePrice.toFixed(2)}</p>
                    </div>
                </div>
                <Button className="w-full text-xs h-8 bg-[#FF6B00] hover:bg-[#E05F00]">Add to Cart</Button>
            </div>
        </div>
    )
}
