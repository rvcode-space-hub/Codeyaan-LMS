import User from '../models/user.model.js'

class UserRepository {

  async create(userData) {
    return await User.create(userData)
  }

  async findByEmail(email) {
    return await User.findOne({
      email: email.toLowerCase()
    })
  }

  async findByUsername(username) {
    return await User.findOne({
      username: username.toLowerCase()
    })
  }

  // ✅ BEST: email OR username login
  async findByEmailOrUsername(identifier) {
    const normalized = identifier.toLowerCase()

    return await User.findOne({
      $or: [
        { email: normalized },
        { username: normalized }
      ]
    })
  }

  // ❗ Optional (if you keep identifier array)
  async findByIdentifier(identifier) {
    return await User.findOne({
      identifier: identifier.toLowerCase()
    })
  }

  async findByGoogleId(googleId) {
    return await User.findOne({ googleId })
  }

  // ✅ FIXED naming
  async findByGithubId(githubId) {
    return await User.findOne({ githubId })
  }

  async findById(id) {
    return await User.findById(id)
  }
}

export default new UserRepository()