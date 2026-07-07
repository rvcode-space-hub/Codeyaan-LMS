import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    deviceId: String,

    deviceName: String,

    browser: String,

    os: String,

    ipAddress: String,

    location: String,

    lastSeen: {
      type: Date,
      default: Date.now,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

SessionSchema.index({ userId: 1 });
SessionSchema.index({ deviceId: 1 });

export default mongoose.model("Session", SessionSchema);