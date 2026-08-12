const express = require("express");
const db = require("./config/database_conn");
const session = require("express-session");
const app = express();
const port = process.env.PORT || "3000";

require("./Database/init");

app.use(express.json());
app.use(session({
    secret: "test-secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: true,
        maxAge: 60000 * 15
    },
}));

app.use("/user", require("./routes/userRoutes"));
app.use("/book", require("./routes/bookRoutes"));

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