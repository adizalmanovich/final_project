const express = require("express");
const router = express.Router();

const loginController = require("../controllers/LoginController");

router.get("/", loginController.getLoginPage);
router.post("/login", loginController.login);
router.get("/register", loginController.registerForm);
router.post("/register", loginController.register);
// router.post("/register", loginController.register);
// router.post("/login", loginController.login);
// router.get("/logout", loginController.logout);
// router.get("/", loginController.isLoggedIn, loginController.foo);
// router.get("/", feedController.getFeedPage);

module.exports = router;
