const connection = require('./connection.js');
const util = require('util');

// promisify query
const promiseQuery = util.promisify(connection.query).bind(connection);

const orm = {
    selectAll : async function(table){
        const queryString = "SELECT * FROM ??";
        const data = await promiseQuery(queryString, [table]);
        // console.log(data)
        return data;
    },

    insertOne : async function(table, column, value){
        const queryString = "INSERT INTO ?? SET ?? = ?";
        await promiseQuery(queryString, [table, column, value]);
    },

    updateOne : async function(table, setColumn, setValue, whereCol, whereVal, callback){
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        await promiseQuery(queryString, [table, setColumn, setValue, whereCol, whereVal])
    }
}

module.exports = orm;