const Database = require("better-sqlite3");

let db;

try {
    const db = new Database("Library.db", { verbose: console.log });

    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");

    console.log("Database successfully connected");
} catch (err) {
    console.log(`Error: ${err}`);
}