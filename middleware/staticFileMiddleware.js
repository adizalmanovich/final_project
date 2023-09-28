const express = require("express");

// Middleware to serve uploaded pictures
const staticFileMiddleware = express.static("uploads/");

module.exports = staticFileMiddleware;
