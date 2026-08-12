const express = require("express");
const bookRouter = express.Router();

// This is the POST HTTP method route
bookRouter.post("/", (req, res) => {
    res.status(200).json({
        "message": "Hello this test route works"
    });
});

// This is the GET HTTP method 
bookRouter.get("/show-books", (req, res) => {

});

module.exports = bookRouter;