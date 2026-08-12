const User = require("../../Models/userModel");

const loginUser = async (req, res) => {
    // User identifier could be a username or email.
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({
            status: "Error",
            message: `You have entered nothing in the input fields.
            Please fill in the username/email and password field to login.`
        });
    }

    try {
        const user = await User.findByEmail(email);

        if (user.password !== password) {
            return res.status(401).json({
                status: "Error: Not authorised ",
                message: `Credentials are invalid. Please enter the correct email
                and password.`
            });
        }

        req.session.email = user.email;
        req.session.username = user.username;

        return req.session.save((err) => {
            if (err) {
                return res.status(500).json({
                    status: "Error",
                    message: "Failed to establish user session."
                });
            }
            
            return res.status(200).json({
                status: "Success",
                message: "Login successful!",
                user: {
                    username: user.username,
                    email: user.email
                }
            });
        });

    } catch (err) {
        return res.status(500).json({
            status: "Error",
            message: "Server error during login",
            error: err.message
        })
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

const forgotPassword = (req, res) => {
    res.send("To be later implemented.");
};

const logout = (req, res) => {
    res.send("To be later implemented");
}

const userAuthController = {
    loginUser,
    registerUser,
    forgotPassword,
    logout
};

module.exports = userAuthController;