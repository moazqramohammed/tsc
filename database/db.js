import mysql from "mysql2/promise";
const config = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

async function query(query, params) {
  try {
    const connection = await mysql.createConnection(config);
    const [results] = await connection.query(query, params);
    connection.end();
    return results;
  } catch (error) {
    console.log(error.sqlMessage);
  }
}

export default query;
