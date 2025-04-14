import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, Heart, User, Menu, Star, ChevronRight, Calendar, Tag, Percent, LifeBuoy, Users, BookOpen, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import AgeCategory from "@/components/age-category"
import ChatSupport from "@/components/chat-support"
import ToyShopCarousel from "@/components/banner-carousel"
import ProductListings from "@/components/product-listings"
import Footer from "@/components/Footer"
import TestimonialCarousel from "@/components/review-caroursel"
import MediaFeatureSection from "@/components/featured"
import {
  getProducts,
  getAgeGroups,
  getAwards,
  getPartners,
  getBanners,
  getTestimonials,
  getMediaFeatures,
} from "@/lib/api"

export default async function Home() {
  // Fetch data in parallel
  const [productsData, ageGroupsData, awardsData, partnersData, bannersData, testimonialsData, mediaFeaturesData] =
    await Promise.all([
      getProducts({ featured: true, limit: 10 }).catch(() => ({ products: [] })),
      getAgeGroups().catch(() => []),
      getAwards().catch(() => []),
      getPartners().catch(() => []),
      getBanners({ active: true }).catch(() => ({ banners: [] })),
      getTestimonials({ featured: true }).catch(() => ({ testimonials: [] })),
      getMediaFeatures({ featured: true }).catch(() => ({ mediaFeatures: [] })),
    ])

  const products = productsData.products || []
  const ageGroups = ageGroupsData || []
  const awards = awardsData || []
  const partners = partnersData || []
  const banners = bannersData.banners || []
  const testimonials = testimonialsData.testimonials || []
  const mediaFeatures = mediaFeaturesData.mediaFeatures || []

  const navItems = [
    { name: "Wishlist", icon: Heart, href: "/wishlist" },
    { name: "Signin", icon: User, href: "/signin" },
    { name: "Cart", icon: ShoppingCart, href: "/cart" }
  ];
  const items = [
    { icon: Tag, text: "Shop by category", href: "/shop/category" },
    { icon: Calendar, text: "Shop by age", href: "/shop/age" },
    { icon: Percent, text: "Deals and Discounts", href: "/deals" },
    { icon: LifeBuoy, text: "Support", href: "/support" },
    { icon: Users, text: "Parents and Educators", href: "/parents-educators" },
    { icon: BookOpen, text: "Blog", href: "/blog" },
    { icon: Info, text: "About us", href: "/about" },
  ];


  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <>
        <header className="sticky top-0 z-50 bg-[#FFDD00] px-4 py-5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 md:w-[15%] md:justify-center">

              <Image
                src="/images/logo.webp?height=30&width=100"
                alt="PlayKids Logo"
                width={150}
                height={50}
                className="h-8"
              />
            </div>

            {/* Desktop Search */}
            <div className="hidden md:block md:w-1/2 relative">
              <Input
                placeholder="Search for toys, brands and more"
                className="pl-4 pr-12 bg-white rounded-full h-12 w-full"
              />
              <div className="bg-[#822382] p-2 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex md:gap-8">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="group flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-purple-600"
                >
                  <item.icon
                    className="text-[#822382] h-6 w-6 transition-transform duration-200 group-hover:scale-110"
                  />
                  <div className="text-[#822382] transition-colors duration-200 group-hover:text-purple-600">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Icons (No Text) */}
            <div className="flex md:hidden gap-4">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="flex items-center cursor-pointer"
                >
                  <item.icon className="text-[#822382] h-6 w-6" />
                </Link>
              ))}
              {/* Menu button - needs client handling */}
              <Link href="/menu" className="md:hidden">
                <Menu className="h-6 w-6 text-[#822382]" />
              </Link>
            </div>
          </div>
        </header>

        {/* Mobile Search Bar in White Container */}
        <div className="md:hidden bg-white px-4 py-3 shadow-md">
          <div className="relative">
            <Input
              placeholder="Search for toys, brands and more"
              className="pl-4 pr-12 bg-white border-gray-300 rounded-full h-10 w-full"
            />
            <div className="bg-[#822382] p-2 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </>
      <nav className="hidden md:flex items-center justify-between px-6 py-3 bg-[#FFFDF4] border-b border-[#FFDD00] shadow-sm">
        <div className="flex justify-evenly items-center w-full overflow-x-auto">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
            >
              <item.icon className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
          <Link
            href="/track-order"
            className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
          >
            Track order
          </Link>
        </div>


      </nav>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Banner */}
        <ToyShopCarousel slides={banners} />

        {/* Award Section */}
        <section className="px-4 py-5">
          <h2 className="font-bold text-lg mb-3">Multi Award winning toys</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {awards.map((award, i) => (
              <div key={award._id || i} className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src={award.image || "/placeholder.svg"} alt={award.name} />
                </div>
                <span className="text-xs text-center">{award.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Shop by Age */}
        <section className="px-4 py-3 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Shop by age</h2>

          </div>
          <div className="flex gap-2 overflow-x-auto p-3 scrollbar-hide border-b border-t">
            {ageGroups.map((ageGroup) => (
              <AgeCategory
                key={ageGroup._id}
                age={ageGroup.age}
                color={ageGroup.color}
                textColor={ageGroup.textColor}
                slug={ageGroup.slug}
              />
            ))}
          </div>
        </section>

        {/* Product Listings */}
        <section>
          <ProductListings products={products} title="Featured Products" categoryLink="/products" />
        </section>

        {/* Shop by Category */}
        <section className="px-4 py-3 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Shop by Category</h2>
            <Link href="/categories" className="text-sm text-gray-500 flex items-center">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex gap-2 overflow-x-auto p-3 scrollbar-hide border-b border-t">
            {ageGroups.map((ageGroup) => (
              <AgeCategory
                key={ageGroup._id}
                age={ageGroup.age}
                color={ageGroup.color}
                textColor={ageGroup.textColor}
                slug={ageGroup.slug}
              />
            ))}
          </div>
        </section>

        <section className="px-4 py-3 bg-gray-50">
          {/* Product Listings */}
          <section>
            <ProductListings products={products} title="Best Sellers" categoryLink="/products" />
          </section>
        </section>

        {/* Features Section
        <section className="px-4 py-5 bg-white">
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: "star", title: "Premium Quality" },
              { icon: "circle", title: "Fast Delivery" },
              { icon: "dollar", title: "Best Prices" },
              { icon: "shield", title: "Secure Payment" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-1">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-xs text-center">{feature.title}</span>
              </div>
            ))}
          </div>
        </section> */}

        {/* Deals and Discounts */}
        <section>
          <ProductListings products={products} title="Special Offers" categoryLink="/products" />
        </section>

        {/* Testimonials */}
        <section className="px-4 py-5 bg-white">
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        {/* Media Mentions */}
        <section className="px-4 py-5 bg-white">
          <MediaFeatureSection mediaFeatures={mediaFeatures} />
        </section>

        {/* Partners */}
        <section className="px-4 py-5 bg-[#FFDD00] w-full">
          <p className="text-sm font-medium mb-3">Also available at</p>
          <div className="flex justify-between items-center">
            {partners.map((partner, index) => (
              <Image
                key={partner._id || index}
                src={partner.image || "/placeholder.svg"}
                alt={partner.name}
                className="border border-black border-[1.5px] rounded-lg"
                width={250}
                height={320}
              />
            ))}
          </div>
        </section>

        {/* Chat Support */}
        <ChatSupport />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
