import mongoose from "mongoose";

const LoginHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    ipAddress: String,

    browser: String,

    os: String,

    deviceName: String,

    loginAt: {
      type: Date,
      default: Date.now,
      index: true,
    },

    logoutAt: Date,

    success: {
      type: Boolean,
      default: true,
    },

    reason: String,
  },
  {
    timestamps: true,
  }
);
LoginHistorySchema.index({ userId: 1 });
LoginHistorySchema.index({ loginAt: -1 });

export default mongoose.model("LoginHistory", LoginHistorySchema);