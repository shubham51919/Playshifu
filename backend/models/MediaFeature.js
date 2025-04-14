import mongoose from "mongoose"

const mediaFeatureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoThumbnail: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
    },
    networks: [
      {
        type: String,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

const MediaFeature = mongoose.model("MediaFeature", mediaFeatureSchema)

export default MediaFeature
