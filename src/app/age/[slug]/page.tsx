import { getAgeGroups, getProducts } from "@/lib/api"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ProductCard from "@/components/product-card"

export default async function AgeGroupPage({ params }: { params: { slug: string } }) {
  // Get all age groups to find the one with matching slug
  const ageGroups = await getAgeGroups().catch(() => [])
  const ageGroup = ageGroups.find((group) => group.slug === params.slug)

  if (!ageGroup) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium">Age group not found</h1>
        <Link href="/" className="text-blue-500 hover:underline flex items-center mt-4">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
        </Link>
      </div>
    )
  }

  // Get products for this age group
  const productsData = await getProducts({ ageGroup: ageGroup._id, limit: 20 }).catch(() => ({ products: [] }))
  const products = productsData.products || []

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-gray-600 hover:underline flex items-center mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to home
      </Link>

      <h1 className="text-3xl font-medium mb-6">Toys for {ageGroup.age} years</h1>
      <p className="text-gray-600 mb-8">
        Discover our collection of age-appropriate toys designed specifically for children aged {ageGroup.age} years.
      </p>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found for this age group.</p>
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
