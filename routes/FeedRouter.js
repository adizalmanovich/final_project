const express = require("express");
const router = express.Router();

const feedController = require("../controllers/FeedController");

router.get("/", feedController.getFeedPage);

module.exports = router;
