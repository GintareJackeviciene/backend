const mysql = require('mysql2/promise');

const { dbConfig } = require('./config');

async function executeQuery(sql, arguments = []) {
    let connection;

    try {
        //sukuriam prisijungima i DB 
        connection = await mysql.createConnection(dbConfig);

        //pateiktos uzklausos vygdymas
        const [rows] = await connection.execute(sql, arguments);
        console.log('rows ===', rows);
        return [rows, null];
    } catch (error) {
        return [null, error];
    } finally {
        if (connection) {
            connection.end();
        }
    }


}

module.exports = {
    executeQuery
}