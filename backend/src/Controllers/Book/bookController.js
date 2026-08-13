const Book = require("../../Models/bookModel");

const addBook = (req, res) => {
    const { title, genre, publication_year } = req.body;

    // There must be a check for the user being a librarian?
    if (!title || ! genre || !publication_year) {
        return res.status(400).json({
            status: "Error",
            message: "No input data to add the book"
        });
    }

    try {
        Book.createBook({ genre, title, publication_year});

        const bookAdded = Book.getBookByTitle(title);

        return res.status(200).json({
            status: "Success",
            message: "Book has been added.",
            book_details: {
                id: `${bookAdded.id}`,
                title: `${bookAdded.title}`,
                genre: `${bookAdded.genre}`,
                publication_year: `${bookAdded.publication_year}`,
                availability: `${bookAdded.available}`
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            message: "Server could not process the request",
            error: err.message
        });
    }
};

const findBookByTitle = (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            status: "Error",
            message: "You have not entered a title yet."
        });
    }

    try {
        const book = Book.getBookByTitle(title);

        if (!book) {
            return res.status(400).json({
                status: "Error",
                message: `No books were found with the title ${title}`
            });
        }

        return res.status(200).json({
            status: "Success",
            message: {
                title: book.title,
                genre: book.genre,
                publication_year: book.publication_year,
                availability: book.available
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            message: "Server could not process the request",
            error: err.message
        });
    }
};

const updateBook = (req, res) => {
    
};

const bookController = {
    addBook,
    findBookByTitle
};

module.exports = bookController;