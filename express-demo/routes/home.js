const express = require('express');
const homeRoute = express.Router();

homeRoute.get('/', (req, res) => {
    res.render('index', { title: 'My express app', message: 'Hello Separate File' })
});

module.exports = homeRoute;