import User from '../models/user.model.js'

class UserRepository {
    async create(userData) {
    return await User.create(userData)
  }
    async findByEmail(email){
        return await User.findOne({email});
    }
     async findById(id) {
    return await User.findById(id);
  }

}

export default new UserRepository;