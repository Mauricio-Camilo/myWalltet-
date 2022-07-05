import connection from "./../database.js"

async function checkUser (email) {
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
}

async function registerUser (name, email, hashedPassword) {
    return connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );
}

async function getByEmail (email) {
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
}

const authRepository = {
    checkUser,
    registerUser,
    getByEmail
}

export default authRepository;