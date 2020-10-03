const musicas = require('../model/musicas.json');

const getAll = (req, res) => {
    console.log(req.url);
    
    res.status(200).send(musicas);
}

const getById = (req, res) => {
    const id = req.params.id
    const musicaFiltrada = musicas.find((musica)=> musica.id == id
    )

    res.status(200).send(musicaFiltrada)
}

module.exports = { getAll, getById }