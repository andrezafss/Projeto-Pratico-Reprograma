//passo-a-passo
//1- importar o express
//2- declarar a variavel  app atribuindo o metodo do express
//3- importar a rota 
//4- usar a rota criada
//5- exportar o app 

const express = require('express');
const app = express();
app.use(express.static('public'));

const musicas = require('./routes/musicasRoutes');

app.use('/', musicas);

app.get('*',(req, res) => {
    res.status(400).sendFile('./views/404.html', {root: __dirname})
})

module.exports = app;