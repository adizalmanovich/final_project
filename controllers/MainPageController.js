const getMainPage = (req, res) => {
  res.render("../views/mainPage.ejs", {});
};

module.exports = {
  getMainPage,
};
