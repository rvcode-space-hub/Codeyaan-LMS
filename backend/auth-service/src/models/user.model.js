import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

     email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    username: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true
     
    },

    avatar: {
      type: String,
      default: null,
    },

    // Authentication
    password: {
      type: String,
      required: function () {
        return this.provider === "local";
      },
    },

    provider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },

    providerId: {
      type: String,
    },

    // Login Identifier Search

    identifier: {
      type: [String],
      default: [],
    },

  
    // Authorization

    role: {
      type: String,
      enum: [
        "seed_admin",
        "super_admin",
        "admin",
        "instructor",
        "student",
      ],
      default: "student",
    },


    // Verification

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isPhoneVerified: {
      type: Boolean,
      default: false,
    },

  
    // Account Status

    accountStatus: {
      type: String,
      enum: ["pending", "active", "suspended", "deleted"],
      default: "pending",
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    // Security
   
    failedLoginAttempts: {
      type: Number,
      default: 0,
    },

    lockUntil: {
      type: Date,
      default: null,
    },

    // Login Information

    lastLogin: {
      type: Date,
      default: null,
    },

    lastLoginIP: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.index(
  { email: 1 },
  {
    unique: true,
    partialFilterExpression: {
      email: {
        $type: "string"
      }
    }
  }
);

UserSchema.index(
  { username: 1 },
  {
    unique: true,
    partialFilterExpression: {
      username: {
        $type: "string"
      }
    }
  }
);

UserSchema.index(
  { phone: 1 },
  {
    unique: true,
    sparse: true
  }
);

UserSchema.index(
  { providerId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      providerId: {
        $type: "string"
      }
    }
  }
);

UserSchema.index({ identifier: 1 });

UserSchema.index({
   role:1,
   accountStatus:1
});

const User = mongoose.model("Users", UserSchema);

export default User;