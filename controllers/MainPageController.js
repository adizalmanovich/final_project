const path = require("path");

const getMainPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/MainPage/MainPage.html"));
};

module.exports = {
  getMainPage,
};
