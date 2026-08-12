const db = require("../config/database_conn");

class UserModel {
    static createNewUser({
        email, first_name, last_name, username,
        password, account_active=1
    }) {
        const prepStmt = db.prepare(
            `INSERT INTO User (
                email, first_name, last_name, 
                username, password, account_active
            ) VALUES (?, ?, ?, ?, ?, ?)`
        );

        const info = prepStmt.run(email, first_name, last_name, username,
        password, account_active);

        return info;
    }

    static findByEmail(email) {
        const prepStmt = db.prepare(`
            SELECT * FROM User WHERE email = ?
        `);

        return prepStmt.get(email);
    }

    static viewAllUsers() {
        const prepStmt = db.prepare(`
            SELECT * FROM User
        `);
        
        return prepStmt.run();
    }

    static isUserUnique({ email, username }) {
        const prepStmt = db.prepare(`
            SELECT COUNT(*) AS count
            FROM User
            Where email = ? and username = ?
        `);

        const numbersFound = prepStmt.get(email, username);
        return numbersFound > 0;
    }

    static updateDetails(email, { first_name, last_name, username,
    password }) {
        const currentUser = this.findByEmail(email);
        if (!currentUser) return;

        const firstName = first_name ?? currentUser.first_name;
        const lastName = last_name ?? currentUser.last_name;
        const newUsername = username ?? currentUser.username;
        const newPassword = password ?? currentUser.password;

        const prepStmt = db.prepare(`
            UPDATE User
            SET first_name = ?,
                last_name = ?,
                username = ?,
                password = ?
            WHERE email = ?
        `);

        const updatedInfo = prepStmt.run(firstName, lastName, newUsername,
            newPassword, email
        );
            
        return updatedInfo.changes;
    }

    static updatePassword (email, newPassword) {
        const currentUser = this.findByEmail(email);

        if (!currentUser) {
            return;
        }

        const prepStmt = db.prepare(`
            UPDATE User
            SET password = ?
            WHERE email = ?
        `);

        const updatedPassword = prepStmt.run(email, newPassword);

        return updatedPassword;
    }

    static deleteUser(email) {
        const prepStmt = db.prepare(`
            DELETE FROM User
            WHERE email = ?
        `);

        const info = prepStmt.run(email);

        return info.changes > 0;
    }
}

module.exports = UserModel;