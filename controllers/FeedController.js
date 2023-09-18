const getFeedPage = (req, res) => {
  res.render("../views/feed.ejs", {});
};

module.exports = {
  getFeedPage,
};
