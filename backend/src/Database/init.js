const fs = require("fs");
const db = require("../config/database_conn");
const path = require("path");
const userData = require("./userData");

const schema = fs.readFileSync(
    path.join(__dirname, "schema.sql"),
    "utf8"
);

db.exec(schema);

db.exec(`
    BEGIN;
    DELETE FROM user;
    COMMIT;
`)

const prepStmt = db.prepare(`
    INSERT INTO user (email, first_name, last_name,
    username, password, account_active)
    VALUES (?, ?, ?, ?, ?, ?)
`);


for (const {email, first_name, last_name,
    username, password, account_active
} of userData) {
    prepStmt.run(email, first_name, last_name,
    username, password, account_active);
}

console.log("Schema loaded");