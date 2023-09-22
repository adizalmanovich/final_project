const path = require("path");

const getAdministrationPage = (req, res) => {
  res.sendFile(
    path.resolve("public", "views/Administration/Administration.html")
  );
};

const getNumOfPostsToday = () => {
  const numOfPostsToday = 10;
  return numOfPostsToday;
};

const getNumOfPostsThisWeek = () => {
  const numOfPostsThisWeek = 10;
  return numOfPostsThisWeek;
};

module.exports = {
  getAdministrationPage,
};
