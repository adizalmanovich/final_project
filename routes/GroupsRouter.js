const express = require("express");
const router = express.Router();

const groupsController = require("../controllers/GroupsController");

router.get("/", groupsController.getGroupsPage);
router.get("/group", groupsController.getGroupProfilePage);

router.post("/create", groupsController.createGroup);
router.post("/update", groupsController.updateGroup);
router.get("/delete", groupsController.deleteGroup);
router.get("/list", groupsController.getAllGroups);
router.get("/search", groupsController.getGroupsSearch);


module.exports = router;
