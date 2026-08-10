const express = require("express");
const db = require("./config/database_conn");

require("./Database/init");

const app = express();

const port = process.env.PORT || "3000";

app.use(express.json());

app.use('/user', require("./routes/userRoutes.js"));

const serverConn = app.listen(port, () => {
    console.log("The server has successfully connected.");
});

process.on("SIGINT", () => {
    console.log("Shutting down server...");

    serverConn.close(() => {
        console.log("HTTP server closed.");
        db.close();
        console.log("Library database has closed.");
        process.exit(0);
    });
});