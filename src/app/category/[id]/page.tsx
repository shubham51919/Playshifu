import { getCategoryById, getProductsByCategory } from "@/lib/api"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ProductCard from "@/components/product-card"

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const [category, productsData] = await Promise.all([
    getCategoryById(params.id).catch(() => null),
    getProductsByCategory(params.id, { limit: 20 }).catch(() => ({ products: [] })),
  ])

  const products = productsData.products || []

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link href="/" className="text-blue-500 hover:underline flex items-center mt-4">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-gray-600 hover:underline flex items-center mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      {category.description && <p className="text-gray-600 mb-8">{category.description}</p>}

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </div>
  )
}
