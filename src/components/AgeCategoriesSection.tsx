"use client"
import { useState } from "react";
import AgeCategory from "./age-category";

export default function AgeCategoriesSection() {
  // Example age groups data
  const ageGroups = [
    { _id: "1", age: "4-6", color: "bg-[#822382]", textColor: "text-white", slug: "4-6-years" },
    { _id: "2", age: "6-8", color: "bg-[#822382]", textColor: "text-white", slug: "6-8-years" },
    { _id: "3", age: "8-10", color: "bg-[#822382]", textColor: "text-white", slug: "8-10-years" },
    { _id: "4", age: "10+", color: "bg-[#822382]", textColor: "text-white", slug: "10-plus-years" }
  ];

  // State to track which age group is active
  const [activeAgeGroup, setActiveAgeGroup] = useState("1"); // Default to first age group

  return (


    <div className="flex gap-5 md:gap-9 overflow-x-auto py-8 scrollbar-hide border-b md:border-t md:ml-4">
      {ageGroups.map((ageGroup) => (
        <div key={ageGroup._id} onClick={() => setActiveAgeGroup(ageGroup._id)}>
          <AgeCategory
            age={ageGroup.age}
            color={ageGroup.color}
            textColor={ageGroup.textColor}
            slug={ageGroup.slug}
            isActive={activeAgeGroup === ageGroup._id}
          />
        </div>
      ))}
    </div>

  );
}