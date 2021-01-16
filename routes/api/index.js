let router = require("express").Router();
let routes = require("./books");

// Routes of the books
router.use("/books", routes);

module.exports = router;