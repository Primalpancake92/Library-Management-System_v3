const express = require("express");
const bookRouter = express.Router();
const bookController = require("../Controllers/Book/bookController");

bookRouter.post("/add_book", bookController.addBook);

// This is the POST HTTP method route
bookRouter.get("/", (req, res) => {
    res.status(200).json({
        "message": "Hello this test route works"
    });
});

// This is the GET HTTP method 
bookRouter.get("/find_book", bookController.findBookByTitle);

module.exports = bookRouter;