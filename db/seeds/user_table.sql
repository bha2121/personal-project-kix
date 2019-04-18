CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(80),
    lastname VARCHAR(80),
    email VARCHAR(100),
    userpassword TEXT,
    isadmin BOOLEAN
);

