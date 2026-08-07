const db = require("../config/database_conn");

class UserModel {
    static createNewUser({email, first_name, last_name, username,
        password, account_active
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

    static updateDetails(email, {first_name, last_name, username,
        password}) {
        const prepStmt = db.prepare(`
            UPDATE user 
            SET first_name = ?,
                last_name = ?,
                username = ?,
                password = ?
            WHERE email = ?
        `);

        const updatedInfo = prepStmt.run(first_name, last_name, username,
            password, email);
        
        return updatedInfo.changes > 0;
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