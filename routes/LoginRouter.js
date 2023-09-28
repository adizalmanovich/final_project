const express = require("express");
const router = express.Router();
const { loginUser, getLoginPage, registerForm, registerUser } = require("../controllers/LoginController")
const { validateFields, validateLogin, checkAuthenticated } = require('../utils/auth.middleware');
const User = require("../models/User");

router.get("/", getLoginPage);
router.post('/login', validateLogin, loginUser);
router.get("/register", registerForm);
router.post('/register', validateFields, registerUser);
router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
// router.post("/register", loginController.register);
// router.post("/login", loginController.login);
// router.get("/logout", loginController.logout);
// router.get("/", loginController.isLoggedIn, loginController.foo);
// router.get("/", feedController.getFeedPage);
module.exports = router;
