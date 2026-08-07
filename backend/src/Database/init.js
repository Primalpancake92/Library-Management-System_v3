const fs = require("fs");
const db = require("../config/database_conn");

const schema = fs.readFileSync(
    "../src/Database/schema.sql",
    "utf8"
);

db.exec(schema);

console.log("Schema loaded");