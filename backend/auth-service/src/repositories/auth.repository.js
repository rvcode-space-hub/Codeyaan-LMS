import User from '../models/user.model.js'
import Session from '../models/session.model.js'
import LoginHistory from "../models/loginHistory.model.js"

class UserRepository {

  async create(userData) {
    return await User.create(userData)
  }

async createSession(sessionData) {
    return await Session.create(sessionData);
}


// --------------Login -----------------------------
async createLoginHistroy(loginHistoryData) {
    return await LoginHistory.create(loginHistoryData);
  
}

async  incrementFailedAttempts(userId){
    return User.findByIdAndUpdate(
      userId,

      {
        $inc:{
          failedLoginAttempts :1
        }

      },
      { new : true}
    )};

 // ✅ BEST: email OR username login
  async findByEmailOrUsername(identifier) {
    const normalized = identifier.toLowerCase()

    return await User.findOne({
      $or: [
        { email: normalized },
        { username: normalized }
      ]
    }).lean();
  }

async updateById(userId, data) {
  return User.findByIdAndUpdate(
    userId,
    { $set: data },
    { new: true }
  );
}

 async findById(id) {
    return await User.findById(id)
  }

  // ------------Close Login ----------

  
  async findByEmail(email) {
    return await User.findOne({
      email: email.toLowerCase()
    })
  };

  

  async findByUsername(username) {
    return await User.findOne({
      username: username.toLowerCase()
    })
  }

 

  // ❗ Optional (if you keep identifier array)
  async findByIdentifier(identifier) {
    return await User.findOne({
      identifier: identifier.toLowerCase()
    })
  }

  async findByGoogleId(googleId,meta) {
    return await User.findOne({ googleId , meta})
  }

  // ✅ FIXED naming
  async findByGithubId(githubId,meta) {
    return await User.findOne({ githubId , meta})
  }

 
}

export default new UserRepository()