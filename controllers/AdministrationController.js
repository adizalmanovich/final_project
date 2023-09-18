const getAdministrationPage = (req, res) => {
  res.render("../views/administration.ejs", {});
};

module.exports = {
  getAdministrationPage,
};
