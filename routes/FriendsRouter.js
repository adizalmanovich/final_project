const express = require("express");
const router = express.Router();

const friendsController = require("../controllers/FriendsController");

router.get("/", friendsController.getFriendsPage);

module.exports = router;
