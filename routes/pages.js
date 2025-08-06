//require express package
const express = require('express');
const router = express.Router();

//implementing routes
router.get("/", (req, res) => {
    res.send("This is the home page!");
});

router.get("/about", (req, res) => {
    res.send("This is the about page!");
});

//exporting
module.exports = router;