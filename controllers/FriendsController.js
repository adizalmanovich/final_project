const path = require("path");

const getFriendsPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Friends/Friends.html"));
};

module.exports = {
  getFriendsPage,
};