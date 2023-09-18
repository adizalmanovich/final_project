const express = require("express");
const router = express.Router();

const profileController = require("../controllers/ProfileController");

router.get("/", profileController.getProfilePage);

module.exports = router;
