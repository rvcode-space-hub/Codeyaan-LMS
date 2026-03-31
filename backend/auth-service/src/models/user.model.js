import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  identifier: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  loginType: {
    type: String,
    default: "email"
  },

  role: {
    type: String,
    enum: ["seed_admin", "super_admin", "admin", "instructor", "student"],
    default: "student"
  }

}, {
  timestamps: true

})

const User = mongoose.model('User', UserSchema);

export default User;
