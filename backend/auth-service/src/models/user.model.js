import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  googleId: {
    type: String
  },

  githubId: {
    type: String
  },
  
  avatar: {
    type: String
  },

 username: {
  type: String,
  unique: true,
},

email: {
  type: String,
  unique: true,
},

identifier: {
  type: [String],
  index: true // search fast hoga
},


 password: {
  type: String,
  required: function () {
    return !this.googleId && !this.githubId;
  }
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
