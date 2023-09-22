const path = require("path");

const getLoginPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Index/Index.html"));
};

const login = (req, res) => {
  res.redirect("/main");
};

const register = (req, res) => {
  res.redirect("/main");
};

const registerForm = (req, res) => {
  res.sendFile(path.resolve("public", "views/Register/Register.html"));
};

module.exports = {
  login,
  register,
  getLoginPage,
  registerForm,
};
