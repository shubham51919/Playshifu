import { getProductById } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductListings from "@/components/product-listings"

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id).catch(() => null)

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Link href="/" className="text-blue-500 hover:underline flex items-center mt-4">
                    <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
                </Link>
            </div>
        )
    }

    // Fetch related products (same category or age group)
    const relatedProductsPromise = product.category
        ? fetch(`/api/proxy/categories/${product.category._id}/products?limit=5`)
            .then((res) => res.json())
            .then((data) => data.products || [])
            .catch(() => [])
        : Promise.resolve([])

    const relatedProducts = await relatedProductsPromise

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/" className="text-gray-600 hover:underline flex items-center mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="bg-white rounded-lg p-4">
                    <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>

                    <div className="flex items-center space-x-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-5 w-5 ${star <= Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">
                            {product.rating.toFixed(1)} ({Math.floor(Math.random() * 100) + 10} reviews)
                        </span>
                    </div>

                    {product.category && (
                        <div className="text-sm text-gray-600">
                            Category:{" "}
                            <Link href={`/category/${product.category._id}`} className="text-purple-700 hover:underline">
                                {product.category.name}
                            </Link>
                        </div>
                    )}

                    {product.ageGroup && (
                        <div className="text-sm text-gray-600">
                            Age Group:{" "}
                            <Link href={`/age/${product.ageGroup._id}`} className="text-purple-700 hover:underline">
                                {product.ageGroup.age} yrs
                            </Link>
                        </div>
                    )}

                    <div className="flex items-center space-x-4 mt-4">
                        <span className="text-3xl font-bold text-green-800">
                            ${product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2)}
                        </span>
                        {product.salePrice && product.salePrice < product.price && (
                            <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                        )}
                    </div>

                    <p className="text-gray-700">{product.description}</p>

                    <div className="pt-4 space-y-3">
                        <Button className="w-full bg-[#822382] hover:bg-[#6a1c6a]">Add to Cart</Button>
                        <Button variant="outline" className="w-full border-[#822382] text-[#822382] hover:bg-[#f8f0f8]">
                            Add to Wishlist
                        </Button>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">You may also like</h2>
                    <ProductListings products={relatedProducts} />
                </div>
            )}
        </div>
    )
}
