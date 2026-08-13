const db = require("../config/database_conn");

class bookModel {
    static getAllBooks() {
        const prepStmt = db.prepare(`
            SELECT * FROM Books
        `);

        return prepStmt.all();
    }

    static getBookByTitle({ title }) { 
        const prepStmt = db.prepare(
            `SELECT R`
        )
    }
}