const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name :{
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobileNumber: {
  type: String,
  unique: true,
  sparse: true
},

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserSchema);