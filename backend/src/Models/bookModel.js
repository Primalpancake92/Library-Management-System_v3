const db = require("../config/database_conn");

class bookModel {
    // This is the read operation that returns all books
    static getAllBooks() {
        const prepStmt = db.prepare(`
            SELECT * FROM Book
        `);

        return prepStmt.all();
    }

    // This is the read operation that returns books of matching titles
    static getBookByTitle(title) { 
        const prepStmt = db.prepare(`
            SELECT * FROM Book
            WHERE title = ?
        `);

        const returnedBooks = prepStmt.get(title);

        return returnedBooks;
    }

    // This method creates a new book
    static createBook({ title, genre, publication_year }) {
        // error management is performed by the router objects.
        // The router manages whether or not the user is an admin.
        const prepStmt = db.prepare(`
            INSERT INTO Book(title, genre, publication_year)
            VALUES (?, ?, ?)
        `);

        const newBook = prepStmt.run(title, genre, publication_year);

        return newBook;
    }

    // Update method for the database
    static updateBookDetails(title, {genre, publication_year}) {
        const book = this.getBookByTitle(title);

        if (!book) {
            console.log("There is no such book found.");
            return;
        }

        const newGenre = genre ?? book.genre;
        const newPubYear = publication_year ?? book.publication_year;

        const prepStmt = db.prepare(`
            UPDATE Book
            SET genre = ?,
                publication_year = ?
            WHERE title = ?
        `);

        const updatedBook = prepStmt.run(newGenre, newPubYear, title);

        if (updatedBook.changes === 0) {
            return;
        }

        return this.getBookByTitle(title);
    }

    static removeBook(title) {
        const book = this.getBookByTitle(title);

        if (!book) {
            console.log(`There is no book with the title ${title}`);
            return;
        }

        const prepStmt = db.prepare(`
            DELETE FROM Book
            WHERE title = ?
        `);

        const deletedBook = prepStmt.run(title);
        
        return deletedBook;
    }
}

module.exports = bookModel;