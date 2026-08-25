const express = require("express");
const userRouter = express.Router();
const userController = require("../Controllers/User/userController");
const userAuthController = require("../Controllers/User/userAuthController");

// This is a GET method that routes to the route to fetch all users in 
// the system.

// Note implement the middleware that checks for the 'admin' role.
userRouter.get("/users", userController.getAllUsers);

// This route sends a HTTP GET request to fetch for all the users.
userRouter.get("/find", userController.findUserByEmail);

// Defines the GET request for the user entity
userRouter.get("/:id", (req, res) => {
    res.send("This gets the user");
});

// This route sends a post request when the user wants to login with credentials
userRouter.post("/login", userAuthController.loginUser);

//This method registers a new user
userRouter.post("/register", userAuthController.registerUser);

userRouter.post("/logout", userAuthController.logout);

userRouter.put("/forgotPassword", userAuthController.forgotPassword);

// This is the route sends a PUT request for updating user details
userRouter.put("/update", userController.updateUser);

// This route sends a delete request for removing the user
userRouter.delete("/:id", (req, res) => {
    res.send("This is the delete method for the user");
});

module.exports = userRouter;