const { response } = require('express');
const { validationResult } = require('express-validator');

const Usuario = require('../models/usuario'); 


const getUsuarios = async(req, res) => {

    const usuarios = await Usuario.find({}, 'nombre email role google');
    
    res.status(200).json({
        ok: true,
        usuarios
    })

}

const crearUsuarios = async(req, res = response) => {

    // Como leer el body
    // console.log( req.body ); 
    const { email, password, nombre } = req.body;

    const errors = validationResult( req );

    if ( !errors.isEmpty ){
        return res.status(400).json({
            errors: errors.array(),
            ok: false,
            errors: errors.mapped()
        });
    }

    try {

        const existeEmail = await Usuario.findOne({ email });

        


        const usuario = new Usuario( req.body );

        await usuario.save();

        res.json({
            ok: true,
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error inesperado... revisar logs'
        });
    }

    

}

module.exports = {
    getUsuarios,
    crearUsuarios,
}