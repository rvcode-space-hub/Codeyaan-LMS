class UsernameGenerator {
  static generate(name, email) {

    if (!email) {
      throw new Error("Email is required for username generation");
    }

    const baseUsername = email.split('@')[0].toLowerCase();

    const namePart = name
      ? name.split(' ')[0].toLowerCase().slice(0, 4)
      : "user";

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);

    return `${baseUsername}_${namePart}_${randomSuffix}`;
  }
}

export default UsernameGenerator;