const express = require("express");
const router = express.Router();

const administrationController = require("../controllers/AdministrationController");

router.get("/", administrationController.getAdministrationPage);

module.exports = router;
