const getFriendsPage = (req, res) => {
  res.render("../views/friends.ejs", {});
};

module.exports = {
  getFriendsPage,
};
