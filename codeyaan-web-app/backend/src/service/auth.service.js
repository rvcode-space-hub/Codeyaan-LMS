const User = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const redisClient = require("../config/redis");

/* ================= SIGNUP ================= */
const signupService = async (userData) => {
  const { name, email, password, username  } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    username,
    password: hashedPassword,
  });

  await newUser.save();

  // 🔥 Redis cache AFTER save
  await redisClient.setEx(
    `user:${newUser._id}`,
    300,
    JSON.stringify({
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    })
  );

  return newUser;
};

/* ================= LOGIN ================= */
const loginService = async (username, password) => {
  const sessionKey = `user_session:${username}`;

  // ⚡ Redis session check
  const cachedSession = await redisClient.get(sessionKey);
  if (cachedSession) {
    return {
      source: "redis",
      ...JSON.parse(cachedSession),
    };
  }

  // 🗄 MongoDB fallback
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid username");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const payload = {
    id: user._id,
    role: user.role,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });

  const sessionData = {
    token,
    user: {
      id: user._id,
      role: user.role,
    },
  };

  // 🔥 Redis session store
  await redisClient.setEx(sessionKey, 900, JSON.stringify(sessionData));

  return {
    source: "mongodb",
    ...sessionData,
  };
};

module.exports = {
  signupService,
  loginService,
};
