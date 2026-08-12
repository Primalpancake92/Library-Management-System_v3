const User = require("../../Models/userModel");

const loginUser = async (req, res) => {
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
                    session: {
                        email: req.session.email,
                        username: req.session.username
                    }
                }
            });
        });

    } catch (err) {
        return res.status(500).json({
            status: "Error",
            message: "Server error during login",
            error: err.message
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

const forgotPassword = (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({
            status: "Error",
            message: "Email or password is empty"
        });
    }

    try {
        const user = User.findByEmail(email);

        if (!user) {
            return res.status(404).json({
                status: "Error",
                message: `User with email ${email} not found.`
            });
        }

        User.updatePassword(email, newPassword);

        return res.status(200).json({
            status: "Success",
            message: "You have successfully changed your password"
        });
    } catch (err) {
        return res.status(500).json({
            status: "Server Error",
            message: "Server could not process the request",
            error: err.message
        });
    }
};

const logout = async (req, res) => {
    if (!req.session) {
        return res.status(400).json({
            status: "Error",
            message: "There is no session to clear"
        });
    }

    try {
        return req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({
                    status: "Error",
                    message: "Server could not delete session data",
                    error: err.message
                });
            }

            res.clearCookie("connect.sid", { path: "/" });

            return res.status(200).json({
                status: "Success",
                message: "User session data removed"
            });
        });
    } catch (err) {
        return res.status(500).json({
            status: "Error",
            message: "Server error logging out the user",
            error: err.message
        });
    }
}

const userAuthController = {
    loginUser,
    registerUser,
    forgotPassword,
    logout
};

module.exports = userAuthController;