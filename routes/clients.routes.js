const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clientsController')


//router.get('/', clientsController.getClients)

//router.get('/:id', clientsController.getClientsById)

router.post('/', clientsController.createClients)

//router.put('/:id', clientsController.updateClients)

//router.delete('/:id', clientsController.deleteClients)


module.exports = router