const express = require("express");
const router = express.Router();

const mainPageController = require("../controllers/MainPageController");

router.get("/*", mainPageController.getMainPage);

module.exports = router;
