import Link from "next/link";
import { useRouter } from "next/router";

interface CategoryProps {
    category: string;
    color: string;
    textColor: string;
    slug: string;
    isActive?: boolean;
}

export default function Category({
    category,
    color,
    textColor,
    slug,
    isActive = false
}: CategoryProps) {
    const backgroundClass = isActive ? color : "bg-white";
    const textClass = isActive ? textColor : "text-[rgb(145,145,145)]";
    const borderClass = isActive ? "border-transparent" : "border-gray-400";

    return (
        <Link
            href={`/category/${slug}`}
            className={`${backgroundClass} ${textClass} border ${borderClass} rounded-[8px] px-6 md:px-8 py-3 md:py-4 text-xs md:text-[18px] font-medium whitespace-nowrap transition-colors duration-200`}
        >
            {category}
        </Link>
    );
}