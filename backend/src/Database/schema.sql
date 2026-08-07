CREATE TABLE IF NOT EXISTS user (
    email TEXT NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    account_active BOOLEAN NOT NULL
)