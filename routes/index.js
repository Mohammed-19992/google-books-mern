let path = require("path");
let router = require("express").Router();
let apiRoutes = require("./api");

// Routes
router.use("/api", apiRoutes);

// Redirecting to React app if no API is clicked
router.use(function(request, respond) {
  respond.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;