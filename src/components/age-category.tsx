import Link from "next/link"

interface AgeCategoryProps {
    age: string
    color: string
    textColor: string
    slug: string
}

export default function AgeCategory({ age, color, textColor, slug }: AgeCategoryProps) {
    return (
        <Link
            href={`/age/${slug}`}
            className={`${color} ${textColor} border-bottom border-[#424242] rounded-[8px] px-6 py-3 text-xs font-medium whitespace-nowrap`}
        >
            {age} yrs
        </Link>
    )
}
