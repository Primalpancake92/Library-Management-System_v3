CREATE TABLE IF NOT EXISTS user (
    email TEXT NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    account_active NUMBER NOT NULL DEFAULT 1 CHECK(account_active IN (0, 1))
)