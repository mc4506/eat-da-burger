const orm = require('../config/orm.js');


const burger = {
    all: async function(){
        try {
            const result = await orm.selectAll("burgers");
            // console.log(result);
            return result;
        }
        catch (err) {
            if (err) throw err;
        }
    },

    insert: async function(newBurger){
        try {
            await orm.insertOne("burgers", "burger", newBurger);
            return;
        }
        catch (err) {
            if (err) throw err;
        }
    },

    update: async function(burgerID){
        try {
            await orm.updateOne("burgers", "devoured", 1, "id", burgerID)
            return;
        }
        catch (err) {
            if (err) throw err;
        }
    },
}

module.exports = burger;