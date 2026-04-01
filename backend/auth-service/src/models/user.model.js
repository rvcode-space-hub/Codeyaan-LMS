import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true
  },

  username: {
    type: String,
    unique: true,
    sparse: true // multiple null values allowed and null values ignore hongi
  },

  identifier: {
    type: [String],
    required: true, 
   },

  
  password: {
    type: String,
    required: true
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
