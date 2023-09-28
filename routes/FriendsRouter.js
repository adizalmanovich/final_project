const express = require("express");
const router = express.Router();

const friendsController = require("../controllers/FriendsController");

router.get("/", friendsController.getFriendsPage);
router.get("/profile", friendsController.getFriendProfilePage);
router.get("/search", friendsController.getFriendsSearch);

module.exports = router;
