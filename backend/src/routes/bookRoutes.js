const express = require("express");
const bookRouter = express.Router();
const bookController = require("../Controllers/Book/bookController");

// This is the POST HTTP method route
bookRouter.post("/add_book", bookController.addBook);

// This is the GET HTTP method 
bookRouter.get("/find_book", bookController.findBookByTitle);

// This is the PUT HTTP method
bookRouter.put("/update_book", bookController.updateBook);

module.exports = bookRouter;