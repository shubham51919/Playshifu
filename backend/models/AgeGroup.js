import mongoose from "mongoose"

const ageGroupSchema = new mongoose.Schema(
  {
    age: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      default: "bg-[#822382]",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)

const AgeGroup = mongoose.model("AgeGroup", ageGroupSchema)

export default AgeGroup
