const passport = require("passport");
const User = require("../models/User");

// check if user is already Authenticated
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "User is not authenticated" });
}

function validateLogin(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username and/or password" });
  }

  // Username validation
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ error: "Invalid username format. Only letters, numbers, and underscores are allowed." });
  }

  next();
}


function validateFields(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Username validation
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ error: "Invalid username format. Only letters, numbers, and underscores are allowed." });
  }

  // Password validation
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long." });
  }

  next();
}



module.exports = {
  validateFields,
  validateLogin,
  checkAuthenticated
};
