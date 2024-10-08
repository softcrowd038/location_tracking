import mysql from "mysql2/promise"

const mysqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'rutik',
  port: 3306, 
});


export default mysqlPool;

