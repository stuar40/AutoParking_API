'use strict'
const port = process.env.PORT || 3000
const conect = require ('./config')
const dato = require ('./models/dato')

const app = require ('./app')

//******************************************

var mysql = require('mysql');

var mysqlPool  = mysql.createPool({
    host : "160.153.16.62",
    user : "autoparking2018",
    password: "autoparking@2018",
    database :"autoparking_v1",
    port:3306

});
//***********************************
/*
//llamamos al paquete mysql que hemos instalado
const mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    {
      host: '160.153.16.62',
 		  user: 'autoparking2018',
 		  password: 'autoparking@2018',
 		  database: 'autoparking_v1'
    }
);*/
//mysqlPool.connect()



app.listen(port,() =>
{
  console.log(`API Rest Corriendo en  http://localhost:${port}`)
})

module.exports = app;
