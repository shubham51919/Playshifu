import Image from "next/image"
import Link from "next/link"
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Calendar,
  Tag,
  Percent,
  LifeBuoy,
  Users,
  BookOpen,
  Info,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import ChatSupport from "@/components/chat-support"
import ToyShopCarousel from "@/components/banner-carousel"
import ProductListings from "@/components/product-listings"
import Footer from "@/components/Footer"
import TestimonialCarousel from "@/components/review-caroursel"
import MediaFeatureSection from "@/components/featured"

import {
  ageGroupsData,
  productsData,
  testimonialsData,
  mediaFeaturesData,
  awardsData,
  bannersData,
  partnersData,
} from "@/lib/seed"
import AgeCategoriesSection from "@/components/AgeCategoriesSection"
import CategoriesSection from "@/components/categories"
export default async function Home() {
  // Fetch data in parallel
  // const [productsData, ageGroupsData, awardsData, partnersData, bannersData, testimonialsData, mediaFeaturesData] =
  //   await Promise.all([
  //     getProducts({ featured: true, limit: 10 }).catch(() => ({ products: seedProducts })),
  //     getAgeGroups().catch(() => seedAgeGroups),
  //     getAwards().catch(() => seedAwards),
  //     getPartners().catch(() => seedPartners),
  //     getBanners({ active: true }).catch(() => ({ banners: seedBanners })),
  //     getTestimonials({ featured: true }).catch(() => ({ testimonials: seedTestimonials })),
  //     getMediaFeatures({ featured: true }).catch(() => ({ mediaFeatures: seedMediaFeatures }))
  //   ])

  // const products = productsData.products || seedProducts
  // const ageGroups = ageGroupsData || seedAgeGroups
  // const awards = awardsData || seedAwards
  // const partners = partnersData || seedPartners
  // const banners = bannersData.banners || seedBanners
  // const testimonials = testimonialsData.testimonials || seedTestimonials
  // const mediaFeatures = mediaFeaturesData.mediaFeatures || seedMediaFeatures

  const products = productsData
  const ageGroups = ageGroupsData
  const awards = awardsData
  const partners = partnersData
  const banners = bannersData
  const testimonials = testimonialsData
  const mediaFeatures = mediaFeaturesData

  const navItems = [
    { name: "Wishlist", icon: Heart, href: "/wishlist" },
    { name: "Sign In", icon: User, href: "/signin" },
    { name: "Cart", icon: ShoppingCart, href: "/cart" },
  ]
  const items = [
    { icon: Tag, text: "Shop by category", href: "/shop/category" },
    { icon: Calendar, text: "Shop by age", href: "/shop/age" },
    { icon: Percent, text: "Deals and Discounts", href: "/deals" },
    { icon: LifeBuoy, text: "Support", href: "/support" },
    { icon: Users, text: "Parents and Educators", href: "/parents-educators" },
    { icon: BookOpen, text: "Blog", href: "/blog" },
    { icon: Info, text: "About us", href: "/about" },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      {/* Header */}
      <>
        <header className="sticky top-0 z-50 bg-[#FFDD00] md:px-4 md:py-5 px-4 py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 md:w-[12%]  md:justify-center">
              <Image
                src="/images/logo.webp?height=30&width=100"
                alt="PlayKids Logo"
                width={150}
                height={250}
                className="md:h-9 md:w-[85%] h-7 w-[95%] md:ml-[20px]"
              />
            </div>

            {/* Desktop Search */}
            <div className="hidden md:block md:w-[54%] relative">
              <Input
                placeholder="Search for PlayShifu Toys"
                className="header-search font-[28px] pl-6 pr-12 bg-white rounded-full h-15 w-full"
              />
              <div className="bg-[#822382] p-2 rounded-full absolute right-5 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-white " />
              </div>
            </div>

            {/* Desktop Navigation Items */}
            <div className="flex justify-between pr-12 hidden md:flex md:gap-8 md:w-[28%]">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="group flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-[#822382]"
                >
                  <item.icon className="text-[#822382] h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
                  <div className="text-[#822382] font-[8px] font-light transition-colors duration-200 group-hover:text-purple-600">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Icons (No Text) */}
            <div className="flex md:hidden gap-5">
              {navItems.map((item) => (
                <Link href={item.href} key={item.name} className="flex items-center cursor-pointer">
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
        <div className="md:hidden bg-white px-4 pt-3 pb-4 shadow-md">
          <div className="relative">
            <Input
              placeholder="Search for PlayShifu Toys"
              className="pl-4 pr-12 bg-[rgb(235,235,235)]  rounded-full h-11 w-full"
            />
            <div className="bg-[#822382] p-2 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </>
      <nav className="hidden md:flex items-center justify-between md:px-0 px-6 pt-5 pb-3  bg-white md:w-[89%]">
        <div className="flex justify-between items-center w-full overflow-x-auto md:pl-11">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center  hover:text-gray-900 whitespace-nowrap transition-colors text-[rgb(145,145,145)]"
            >
              <item.icon className="h-5 w-5 mr-2 " />
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
          <Link
            href="/track-order"
            className="text-[rgb(145,145,145)] text-sm  hover:text-gray-900 whitespace-nowrap transition-colors"
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
        <section className="px-2 md:px-4 py-5">
          <h2 className="font-medium text-[23px] md:text-[25px] md:ml-8  mb-4 md:mb-6 md:ml-4 ml-2">
            Multi Award winning toys
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:w-[90%] md:my-4 px-2">
            {awards.map((award, i) => (
              <div key={award._id || i} className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src={award.image || "/placeholder.svg"} alt={award.name} />
                </div>
                {/* <span className="text-xs text-center">{award.name}</span> */}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className={`md:hidden border-t border-gray-300 w-full `} />
        {/* <div className="px-4 flex  justify-center items-center w-full ">
        </div> */}

        {/* Shop by Age */}
        <section className="px-4 md:px-8 py-3 bg-white">
          <div className="flex items-center justify-between ">
            <h2 className="font-medium text-[23px] mt-2 md:text-[25px] md:mb-6 md:ml-4 ">Shop by age</h2>
          </div>
          <AgeCategoriesSection />
        </section>

        {/* Product Listings */}
        <section>
          <ProductListings products={products} title="" categoryLink="/products" />
        </section>
        {/* Divider */}
        <hr className={`md:hidden border-t border-gray-300 w-full `} />
        {/* Shop by Category */}
        <section className="px-4 md:px-8 py-3 bg-white">
          <div className="flex items-center justify-between ">
            <h2 className="font-medium text-[23px] mt-2 md:text-[25px] md:mb-6 md:ml-4 ">Shop by Category</h2>
          </div>
          <CategoriesSection />
        </section>
        {/* Divider */}
        <hr className={`md:hidden border-t border-gray-300 w-full `} />

        {/* Product Listings */}
        <section>
          <ProductListings products={products} title="" categoryLink="/products" />
        </section>

        {/* Features Section */}
        <section className="px-4 py-[40px] md:mt-4 md:py-[80px] bg-[rgb(254,251,230)] flex justify-center items-center">
          <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-5 md:gap-2 w-[90%]">
            {[
              { icon: "/images/feature1.png", title: "Designed by experts" },
              { icon: "/images/feature2.png", title: "Age appropriate and fun" },
              { icon: "/images/feature3.png", title: "Free shipping guaranteed" },
              { icon: "/images/feature4.png", title: "6 months warranty" },
              { icon: "/images/feature5.png", title: "Delivery in 4-5 days" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`
          ${i >= 4 ? "hidden md:flex md:flex-col md:items-center" : "flex flex-col items-center"}
        `}
              >
                <div className="flex items-center justify-center mb-1">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    className="
              w-[95px] h-[95px]     /* 64×64px on mobile */
              md:w-[120px] md:h-[120px]  /* 120×120px on desktop */
            "
                  />
                </div>
                <span
                  className="
            text-sm       /* ~14px on mobile */
            md:text-base  /* ~16px on desktop */
            text-center mt-2 md:mt-4
          "
                >
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Deals and Discounts */}
        <section>
          <ProductListings products={products} title="Combos" categoryLink="/products" />
        </section>

        {/* Divider */}
        <div className="md:px-12 flex  justify-center items-center w-full ">
          <hr className={` border-t border-gray-300 w-full `} />
        </div>

        {/* Testimonials */}
        <section className="md:px-4 py-5 bg-white">
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        {/* Rating */}
        <section className="hidden md:flex mb-8 flex-col justify-center items-center">
          <div className="font-medium mt-2 md:text-[30px] text-[rgb(67,67,67)] mb-2">Rated 4.8 out of 5</div>
          <div className="text-gray-700 text-[14px]">based on 50,000 reviews</div>
        </section>

        {/* Divider */}
        <div className="md:px-12 flex  justify-center items-center w-full ">
          <hr className={` border-t border-gray-300 w-full `} />
        </div>

        {/* Media Mentions */}
        <section className="px-4 py-5 bg-white">
          <MediaFeatureSection mediaFeatures={mediaFeatures} />
        </section>

        {/* Partners */}
        <section className="px-6 py-6 md:px-12 md:py-12 bg-[#FFDD00] w-full">
          <p className="font-medium text-[23px] mt-2 md:text-[28px] mb-3 md:mb-6 ">Also Available at</p>
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap justify-between gap-4 items-center">
              {partners.map((partner, index) => (
                <Image
                  key={partner._id || index}
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-[100px] w-[150px] md:h-[180px] md:w-[230px] border border-black border-[1.5px] rounded-lg flex-shrink-0"
                  width={230}
                  height={180}
                />
              ))}
            </div>
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
