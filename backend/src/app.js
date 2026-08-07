const express = require("express");
const db = require("./config/database_conn");

const app = express();

const port = process.env.PORT || "3000";

app.get('/', (req, res) => {
    res.status(200);
    res.json({
        "status": "success",
        "message": "Hello from Express.JS"
    })
})

const serverConn = app.listen(port, () => {
    console.log("The server has successfully connected.");
})

process.on("SIGINT", () => {
    console.log("Shutting down server...");

    serverConn.close(() => {
        console.log("HTTP server closed.");

        db.close();

        console.log("Library database has closed.");

        process.exit(0);
    });
})