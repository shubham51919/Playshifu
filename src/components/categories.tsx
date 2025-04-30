"use client"
import { useState } from "react";
import Category from "./category";

export default function CategoriesSection() {
    // Example Category groups data
    const CategoryGroups = [
        { _id: "1", category: "Problem solving", color: "bg-[#822382]", textColor: "text-white", slug: "Problem solving" },
        { _id: "2", category: "Geography", color: "bg-[#822382]", textColor: "text-white", slug: "Geography" },
        { _id: "3", category: "Coding", color: "bg-[#822382]", textColor: "text-white", slug: "Coding" },
        { _id: "4", category: "STEM", color: "bg-[#822382]", textColor: "text-white", slug: "STEM" },
        { _id: "5", category: "Packs and Combos", color: "bg-[#822382]", textColor: "text-white", slug: "Packs and Combos" },
        { _id: "6", category: "Language and Numbers", color: "bg-[#822382]", textColor: "text-white", slug: "Language and Numbers" },
        { _id: "7", category: "Animals and Dinsaurs ", color: "bg-[#822382]", textColor: "text-white", slug: "Animals and Dinsaurs " },
        { _id: "8", category: "Space and Music", color: "bg-[#822382]", textColor: "text-white", slug: "Space and Music" },
    ];

    // State to track which Category group is active
    const [activeCategoryGroup, setActiveCategoryGroup] = useState("1"); // Default to first Category group

    return (


        <div
            className="
            flex gap-5 md:gap-9
            overflow-x-auto hide-scrollbar
            md:overflow-x-visible
            md:flex-wrap md:gap-y-15
            py-8 md:scrollbar-default
            md:border-t md:ml-4 
        "
        >
            {CategoryGroups.map(g => (
                <div key={g._id} onClick={() => setActiveCategoryGroup(g._id)}>
                    <Category {...g} isActive={g._id === activeCategoryGroup} />
                </div>
            ))}
        </div>

    );
}