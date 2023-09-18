const express = require("express");
const router = express.Router();

const groupsController = require("../controllers/GroupsController");

router.get("/", groupsController.getGroupsPage);

module.exports = router;
