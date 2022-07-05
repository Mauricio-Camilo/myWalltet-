import connection from "./../database.js"

async function postFinancialEvent (id, value, type) {
    return connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [id, value, type]
      );
}

async function getFinancialEvent (id) {
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [id]
      );
}

async function getFinancialEventSum (id) {
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [id]
      );
}

const financialRepository = {
    postFinancialEvent,
    getFinancialEvent,
    getFinancialEventSum
}

export default financialRepository;