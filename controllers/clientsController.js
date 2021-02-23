const sequelize = require('../conexion')


const createClients= async (req, res) =>{
    const { names, last_names, email, address } = req.body

    let AldanaCLients = [`${names}`, `${last_names}`, `${email}`, `${address}`]
    try {
        const client = await sequelize.query('INSERT INTO clients (names, last_names, email, address) VALUES( ?, ?, ?, ?)',
        {replacements: AldanaCLients, type: sequelize.QueryTypes.INSERT})
        res.status(201).json({client})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}

const getClients = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM clients`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getClientsById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM clients 
        WHERE id_client = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})

        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateClients = async (req, res) =>{
    const { names, last_names, email, address } = req.body

    try {
        const result = await sequelize.query(`UPDATE clients 
        SET names = "${names}",  last_names = "${last_names}", 
        email = "${email}",  address = "${address}", 
        WHERE id_client = ${req.params.id}`,

        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'client updated'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const deleteClients = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM client WHERE id_client = ${req.params.id}`)
        res.status(204).json({
            message: 'client deleted',
            result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


exports.createClients = createClients
exports.getClients = getClients
exports.updateClients = updateClients
exports.deleteClients = deleteClients
exports.getClientsById = getClientsById