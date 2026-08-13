const User = require("../../Models/userModel");

const getAllUsers = async (req, res) => {

}

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

const updateUser = async (req, res) => {
    const {
        email, first_name, last_name, 
        username, password, account_active 
    } = req.body;

    if (!email || !username) {
        return res.status(400).json({
            message: "Plesae fill in the required fields."
        });
    }
    
    const usersFound = await User.isUserUnique(email, username);
    
    if (usersFound) {
        return res.status(400).json({
            message: `Email (${email}) and username (${username}) already
            registered. Please use a unique email and username to update.`
        });
    }

    try {
        User.updateDetails(email, { first_name, last_name, username, password });
        
        const user = await User.findByEmail(email);

        return res.status(200).json({
            message: "User has been succesfully updated.",
            first_name: `${user.first_name}`,
            last_name: `${user.last_name}`,
            username: `${user.username}`,
            password: `${user.password}`
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server could not process this request.",
            error: err.message
        });
    }
};

const deleteUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            status: "Error",
            message: "No email was entered"
        });
    }

    try{
        const userFound = await User.findByEmail(email);

        if (!userFound) {
            return res.status(400).json({
                status: "Error",
                message: `No user found with the email ${email}`
            });
        }

        return res.status(200).json({
            status: "Success",
            message: "User was successfully removed"
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            message: "Server could not process this request.",
            error: err.message
        });
    }

};

const userController = {
    findUserByEmail,
    updateUser,
    deleteUser
};

module.exports = userController;