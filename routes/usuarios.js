/* 
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check, body } = require('express-validator');

const { getUsuarios, crearUsuarios } = require('../controllers/usuarios')

const router = Router();

router.get( '/', getUsuarios );

router.post( '/', 
    [
        body('nombre', 'El nombre es obligatorio').not().isEmpty(),
        body('password', 'El password es obligatorio').not().isEmpty(),
        body('email', 'La contraseña es obligatoria').isEmail(),
    ], 
    crearUsuarios 
); // Crear usuario







module.exports = router;