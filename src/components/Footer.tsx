"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

type ExpandedSections = {
    [key: string]: boolean;
};
export default function Footer() {
    const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
        shop: false,
        support: false,
        parents: false,
        blog: false,
        about: false,
    })

    const toggleSection = (section: string) => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            setExpandedSections({
                ...expandedSections,
                [section]: !expandedSections[section],
            })
        }
    }

    return (
        <footer className="border-t border-gray-200 pt-8 pb-8">
            <div className="container mx-auto md:mx-25">
                {/* Desktop Footer */}
                <div className="hidden md:grid md:grid-cols-12 gap-3">
                    {/* Join the PlayShifu Club - 30% width */}
                    <div className="col-span-4 ">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Join the PlayShifu Club</h3>
                        <p className="text-gray-600 mb-4">viverra ullamcorper Quisque Morbi dolor In efficitur. Nullam venenatis</p>
                        <button className="bg-[#822382] text-white rounded-full px-6 py-2 font-medium">Join the club</button>

                        <div className="mt-10">
                            <h3 className="text-lg font-medium text-gray-800 mb-4">Need Help in something</h3>
                            <p className="text-gray-600 mb-4">
                                viverra ullamcorper Quisque Morbi dolor In efficitur. Nullam venenatis
                            </p>
                            <button className="bg-[#822382] text-white rounded-full px-6 py-2 font-medium">Contact us</button>
                        </div>
                    </div>

                    {/* Shop by category */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Shop by category</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Problem Solving
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Geography
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Language & Numbers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    STEM
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Coding
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Animals & Dinosaurs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Space and Music
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Packs and Combos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Device Compatibility
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Parents & Educators */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Parents & Educators</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Free E- Storybooks
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Parent Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                    Shifu in Classrooms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Blog and About us */}
                    <div className="col-span-1">
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-4">Blog</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Creative Hub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Newscast
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Spotlight
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        PlayShifu Digest
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-4">About us</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Press
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-[#822382]">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile Footer */}
                <div className="md:hidden px-4">
                    {/* Join the PlayShifu Club */}
                    <div className="border-b border-gray-200 py-6 px-2">
                        <div className="flex">
                            <div className="w-1/2">
                                <h3 className="text-[22px] font-medium text-gray-800  px-2">Join the PlayShifu club</h3>
                            </div>
                            <div className="w-1/2">
                                <p className="text-[12px] text-gray-600 mb-4">
                                    viverra ullamcorper Quisque Morbi dolor In efficitur. Nullam venenatis
                                </p>
                                <button className="bg-[#822382] text-white rounded-full px-6 py-2 font-medium">Join the club</button>
                            </div>
                        </div>
                    </div>

                    {/* Need help */}
                    <div className="border-b border-gray-200 py-6 px-2">
                        <div className="flex">
                            <div className="w-1/2">
                                <h3 className="text-[22px] font-medium text-gray-800">Need help in something?</h3>
                            </div>
                            <div className="w-1/2">
                                <p className="text-[12px] text-gray-600 mb-4">
                                    viverra ullamcorper Quisque Morbi dolor In efficitur. Nullam venenatis
                                </p>
                                <button className="bg-[#822382] text-white rounded-full px-6 py-2 font-medium">Contact Us</button>
                            </div>
                        </div>
                    </div>

                    {/* Shop by category */}
                    <div className="border-b border-gray-200 py-4 px-2" onClick={() => toggleSection("shop")}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-800">Shop by category</h3>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${expandedSections.shop ? "transform rotate-180" : ""}`}
                            />
                        </div>
                        {expandedSections.shop && (
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Problem Solving
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Geography
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Language & Numbers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        STEM
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Coding
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Animals & Dinosaurs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Space and Music
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Packs and Combos
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Support */}
                    <div className="border-b border-gray-200 py-4 px-2" onClick={() => toggleSection("support")}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-800">Support</h3>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${expandedSections.support ? "transform rotate-180" : ""}`}
                            />
                        </div>
                        {expandedSections.support && (
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Device Compatibility
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Parents & Educators */}
                    <div className="border-b border-gray-200 py-4 px-2" onClick={() => toggleSection("parents")}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-800">Parents & Educators</h3>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${expandedSections.parents ? "transform rotate-180" : ""}`}
                            />
                        </div>
                        {expandedSections.parents && (
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Free E- Storybooks
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Parent Hub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Shifu in Classrooms
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Blog */}
                    <div className="border-b border-gray-200 py-4 px-2" onClick={() => toggleSection("blog")}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-800">Blog</h3>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${expandedSections.blog ? "transform rotate-180" : ""}`}
                            />
                        </div>
                        {expandedSections.blog && (
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Creative Hub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Newscast
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Spotlight
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        PlayShifu Digest
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* About Us */}
                    <div className="border-b border-gray-200 py-4 px-2" onClick={() => toggleSection("about")}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-800">About Us</h3>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform ${expandedSections.about ? "transform rotate-180" : ""}`}
                            />
                        </div>
                        {expandedSections.about && (
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Press
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Social Media and Payment Methods - shared between desktop and mobile */}
                <div className="mt-6  border-gray-200 md:pt-8 flex justify-center items-center">
                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <h4 className="text-lg font-medium text-gray-800 ">Connect with us</h4>
                            <div className="flex space-x-4">
                                <Link href="#" aria-label="Facebook">
                                    <div className="w-6 h-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-black"
                                        >
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="#" aria-label="Instagram">
                                    <div className="w-6 h-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-black"
                                        >
                                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.096 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.096.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.679.6-1.276 1.153-1.772a4.88 4.88 0 011.772-1.153c.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.857.181.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.881.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.041-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 00-.748-1.15 3.09 3.09 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.063a5.136 5.136 0 110 10.27 5.136 5.136 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="#" aria-label="LinkedIn">
                                    <div className="w-6 h-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-black"
                                        >
                                            <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="#" aria-label="Twitter">
                                    <div className="w-6 h-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="text-black"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.158 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Image src="/images/visa.png" alt="Visa" width={100} height={40} className="h-10 w-auto" />
                            <Image src="/images/maestro.png" alt="Maestro" width={100} height={40} className="h-10 w-auto" />
                            <Image src="/images/mastercard.png" alt="Mastercard" width={100} height={40} className="h-10 w-auto" />
                            <Image
                                src="/images/americanexp.png"
                                alt="American Express"
                                width={100}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}