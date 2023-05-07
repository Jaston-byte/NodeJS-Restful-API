// Importing express module
const express = require("express");

// Creating a new router object
const router = express.Router();

// Importing path module
const path = require("path");

/*
 * This route handler function responds to requests
 * to the root path (/) and the index page (/index.html).
 * It sends the index.html file in response.
 */
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
