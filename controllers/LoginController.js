const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const path = require("path");

const registerForm = (req, res) => {
  res.sendFile(path.resolve("public", "views/Register/Register.html"));
};

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Received registration request with body:", req.body);
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ error: "Username already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

const getLoginPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Index/Index.html"));
};

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send({ error: "Authentication failed" });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).redirect("/main");
    });
  })(req, res, next);
};

module.exports = {
  loginUser,
  getLoginPage,
  registerForm,
  registerUser,
};
