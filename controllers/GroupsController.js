const path = require("path");

const getGroupsPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Groups/Groups.html"));
};

module.exports = {
  getGroupsPage,
};