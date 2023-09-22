const path = require("path");

const getFeedPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Feed/Feed.html"));
};

module.exports = {
  getFeedPage,
};