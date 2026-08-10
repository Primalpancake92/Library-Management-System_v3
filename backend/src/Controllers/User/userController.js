const User = require("../../Models/userModel");

const findUserByEmail = async (req, res) => {
    // need to find the email from the database or the session?
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "You have not entered an email address."
        });
    }
    
    try {
        const foundUser = await User.findByEmail(email);

        if (!foundUser) {
            return res.status(400).json({
                message: `There is no user found with the email ${email}`
            });
        };

        return res.status(200).json({
            email: foundUser.email,
            first_name: foundUser.first_name,
            last_name: foundUser.lastName,
            username: foundUser.username,
            account_active: foundUser.account_active
        });

    } catch (error) {
        return res.status(500).json({
            message: "There is a server error. Unable to fetch the user.",
            error: error.message
        });
    }
};

const registerUser = async (req, res) => {
    const { 
        email, first_name, last_name, 
        username, password, account_active 
    } = req.body;

    if (!email || !password || !first_name || !last_name || !username) {
        return res.status(400).json({
            message: "You have not provided input for the required fields"
        });
    }

    try {
        await User.createNewUser({
            email, first_name, last_name, 
            username, password, account_active
        });

        return res.status(200).json({
            message: `${first_name} ${last_name} has been successfully registered`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server could not create user.",
            error: error.message
        })
    }
};

const updateUser = async (req, res) => {

};

const deleteUser = async (req, res) => {

};

const userController = {
    findUserByEmail,
    registerUser,
    updateUser,
    deleteUser
};

module.exports = userController;