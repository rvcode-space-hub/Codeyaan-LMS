import mongoose from "mongoose";

const OAuthAccountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    provider: {
      type: String,
      enum: ["google", "github", "microsoft"],
      required: true,
    },

    providerId: {
      type: String,
      required: true,
    },

    email: String,

    avatar: String,
  },
  { timestamps: true }
);

OAuthAccountSchema.index(
  { provider: 1, providerId: 1 },
  { unique: true }
);

export default mongoose.model("OAuthAccount", OAuthAccountSchema);