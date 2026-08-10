CREATE TABLE IF NOT EXISTS User (
    email TEXT NOT NULL UNIQUE PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    account_active NUMBER NOT NULL DEFAULT 1 CHECK(account_active IN (0, 1))
)

-- CREATE TABLE IF NOT EXISTS Books (
--     book_id NUMBER NOT NULL PRIMARY KEY AUTOINCREMENT,
--     title TEXT NOT NULL,
--     genre TEXT NOT NULL,
    
-- )