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
        
        return prepStmt.all();
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

    static updateDetails(email, {first_name, last_name, username,
    password}) {
        const currentUser = this.findByEmail(email);
        if (!currentUser) return false;

        const firstName = first_name ?? currentUser.first_name;
        const lastName = last_name ?? currentUser.last_name;
        const newUsername = username ?? currentUser.username;
        const newPassword = password ?? currentUser.password;

        const prepStmt = db.prepare(`
            UPDATE user 
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

    static deleteUser(email) {
        const prepStmt = db.prepare(`
            DELETE FROM user
            WHERE email = ?
        `);

        const info = prepStmt.run(email);

        return info.changes > 0;
    }
}

module.exports = UserModel;