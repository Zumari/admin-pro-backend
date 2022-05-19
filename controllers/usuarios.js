const getUsuarios = (req, res) => {

    res.status(200).json({
        ok: true,
        msg: 'get Usuarios'
    })

}

const crarUsuarios = (req, res) => {

    // Como leer el body
    console.log( req.body );

    res.status(200).json({
        ok: true,
        msg: 'creando usuarios'
    })

}

module.exports = {
    getUsuarios,
    crarUsuarios,
}