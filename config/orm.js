const db = require('./connection.js');

const orm = {
    selectAll : function(table, callback){
        const queryString = "SELECT * FROM ??";
        db.query(queryString, [table], (err, result) => {
            if (err) throw err;
            callback(result);
        })
    },
    insertOne : function(table, column, value, callback){
        const queryString = "INSERT INTO ?? (??) VALUES ?";
        db.query(queryString, [table, column, value], (err, result) => {
            if (err) throw err;
            callback(result);
        })
    },
    updateOne : function(table, setColumn, setValue, whereCol, whereVal, callback){
        const queryStrig = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        db.query(queryString, [table, setColumn, setValue, whereCol, whereVal], (err, result) => {
            if (err) throw err;
            callback(result);
        })
    }
}

module.exports = orm;