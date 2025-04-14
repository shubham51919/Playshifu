import mongoose from "mongoose"

const awardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

const Award = mongoose.model("Award", awardSchema)

export default Award
