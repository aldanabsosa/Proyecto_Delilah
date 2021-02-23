const express = require('express')
//const helmet = require('helmet')
const bodyParser = require('body-parser')
const PORT = 3000
const cors = require('cors')



// Routes

const clientsRoute = require('./routes/clients.routes')
//const ordersRoute = require('./routes/orders.routes')
//const menuRoute = require('./routes/menu.routes')



//Middleware
const app = express()
//app.use(helmet())
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Middleware

// Routes use
/* app.use(clientsRoute)
app.use(ordersRoute) */
app.use('/api/clients', clientsRoute)
//app.use('/api/orders', ordersRoute)
//app.use('/api/menu', menuRoute)


//Server
 app.listen(PORT, ()=>{
    console.log(`Server started in the ${PORT}`);
 })

 exports.app = app