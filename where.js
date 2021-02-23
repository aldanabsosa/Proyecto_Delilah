const sequelize = require('./conexion.js');
var express = require('express');
var app = express();



async function findAllRows(req, res) {
    const query = 'select * from clients'
    console.log('prueba')
    try {
        const result = await  sequelize.query(query,  {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({data:result})
    } catch (e) {
        res.status(500)
        console.log(e)
    }
}




app.get('/campaigns',  findAllRows)


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000');
});