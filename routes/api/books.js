let router = require("express").Router();
let controller = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAll)
  .post(controller.save);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(controller.findOne)
  .delete(controller.remove);

module.exports = router;