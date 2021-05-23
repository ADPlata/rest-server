const  { response } = require('express');


const usuariosGet = (req, res = response) => {
    //console.log(req);
    const {q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit                                                                                                                                                                                                          
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;
    const {nombre , edad } = body;
    res.json({
        msg: `post API - controller - Hola ${nombre}, se que tienes ${edad} años `,
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
    });
}

const usuariosPath = (req, res = response) => {
    res.json({
        msg: 'path API - controller'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}