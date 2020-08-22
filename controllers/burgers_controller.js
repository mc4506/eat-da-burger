const express = require('express');
const burger = require('../models/burger.js');

const routes = express.Router();

// select all burgers
routes.get('/', (req, res) => {
    burger.all()
    .then(data => {
        res.render("index", {
            burgers: data
        });
    });
});

// insert one burger
routes.post('/api/burger', (req, res) => {
    console.log(req.body);
    burger.insert(req.body.burger)
    .then( () => {
        console.log(`Sucessfully inserted a new burger`)
        res.send("added a burger");
    })
})

// update devoured
routes.put('/api/burger/:id', (req, res) => {
    burger.update(req.params.id)
    .then( () => {
        console.log('Devoured a burger')
        res.send("Devoured a burger");
    })
})

module.exports = routes;