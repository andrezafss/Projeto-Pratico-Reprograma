const express = require('express');
const musicasController = require('../controller/musicasController');
const route = express.Router();
const controller = require('../controller/musicasController');


route.get('/musicas', controller.getAll);
route.get('/musica/:id', controller.getById);


module.exports = route;


