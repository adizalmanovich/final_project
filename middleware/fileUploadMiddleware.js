const util = require("util");
const multer = require("multer");
const path = require("path");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var uploadFiles = multer({ storage: storage }).array("file", 20);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
