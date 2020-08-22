const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "mike",
    password: "password",
    database: "burgers_db"
});

connection.connect( err => {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;