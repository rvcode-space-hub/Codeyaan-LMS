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

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["SUPER_ADMIN","ADMIN","STAFF","STUDENT"],
    default: "STUDENT"
  }

}, { timestamps: true 

})

const User = mongoose.model('User', UserSchema);

export default User;
