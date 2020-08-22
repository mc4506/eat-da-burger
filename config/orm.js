const db = require('./connection.js');

const orm = {
    selectAll : function(table){
        const queryString = "SELECT * FROM ??";
        db.query(queryString, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne : function(table, column, value){
        const queryString = "INSERT INTO ?? (??) VALUES ?";
        db.query(queryString, [table, column, value], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne : function(table, setColumn, setValue, whereCol, whereVal){
        const queryStrig = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        db.query(queryString, [table, setColumn, setValue, whereCol, whereVal], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;