const express = require("express");
const router = express.Router();
const bookscontroller = require("../controllers/books-controller.js");

router.get("/", bookscontroller.getAllBooks);
router.post("/", bookscontroller.addNewBook);
router.get("/:id", bookscontroller.getBookById);
router.put("/:id", bookscontroller.updateBook);
router.delete("/:id", bookscontroller.deleteBook);
module.exports = router;
