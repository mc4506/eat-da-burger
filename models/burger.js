const orm = require('../config/orm.js');

const burger = {
    all: function(cb){
        orm.selectAll("burgers", result => {
            cb(result)
        })
    },

    insert: function(newBurger, cb){
        orm.insertOne("burgers, burger", newBurger, result => {
            cb(result)
        })
    },

    update: function(devouredBurger, cb){
        orm.updateOne("burgers", "devoured", 1, "burger", devouredBurger, result => {
            cb(result)
        })
    },

}

module.exports = burger;