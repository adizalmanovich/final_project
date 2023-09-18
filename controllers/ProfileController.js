const getProfilePage = (req, res) => {
  res.render("../views/profile.ejs", {});
};

module.exports = {
  getProfilePage,
};
