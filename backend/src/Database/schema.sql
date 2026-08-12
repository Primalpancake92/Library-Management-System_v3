DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Book;

CREATE TABLE IF NOT EXISTS User (
    email TEXT NOT NULL UNIQUE PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    account_active NUMBER NOT NULL DEFAULT 1 CHECK(account_active IN (0, 1))
);

CREATE TABLE IF NOT EXISTS Book (
    id NUMBER NOT NULL,
    title TEXT NOT NULL,
    genre TEXT NOT NULL CHECK (genre IN (
        'Fiction', 'Horror', 'Non-Fiction', 'Sci-fi', 'Romance', 'Fantasy',
        'Mystery', 'Thriller', 'Historical Fiction', 'Young Adult',
        'Graphical Fiction'
    )),
    publication_year TEXT NOT NULL
);