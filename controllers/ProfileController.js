const path = require("path");

const getProfilePage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Profile/Profile.html"));
};

module.exports = {
  getProfilePage,
};