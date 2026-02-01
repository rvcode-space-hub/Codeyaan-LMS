const { signupService, loginService } = require('../service/auth.service');


const signupController = async (req, res) => {
     try {
       const user = await signupService(req.body);

    res.status(201).json({
      message: "Signup successful",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};




const loginController = async (req, res) => {
  try {
 const { username, password } = req.body;

    const user = await loginService(username, password);


    res.json({
      message: "Login successful",
      data: user,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = {
  signupController,
  loginController,
};
