const getGroupsPage = (req, res) => {
  res.render("../views/groups.ejs", {});
};

module.exports = {
  getGroupsPage,
};
