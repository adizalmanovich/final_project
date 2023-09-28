const path = require("path");

const getFriendsPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Friends/Friends.html"));
};

const getFriendProfilePage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Friend/Friend.html"));
};

const getFriendsSearch = (req, res) => {
  const searchString = req.query.search;

  const friends = [
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: null,
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
    {
      _id: 1,
      profileImage: "../../resources/images/brazil.jpeg",
      name: "test test",
    },
  ];

  res.status(200).send({ friends: friends });
};

module.exports = {
  getFriendsPage,
  getFriendProfilePage,
  getFriendsSearch,
};
