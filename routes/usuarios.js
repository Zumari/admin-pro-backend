/* 
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { getUsuarios, crarUsuarios } = require('../controllers/usuarios')

const router = Router();

router.get( '/', getUsuarios );
router.post( '/', crarUsuarios ); // Crear usuario







module.exports = router;