import bcrypt from "bcrypt"

class PasswordUtil {

  static async hash(password) {
    return bcrypt.hash(password, 10)
  }

  static async compare(password, hash) {
    return bcrypt.compare(password, hash)
  }

}

export default PasswordUtil