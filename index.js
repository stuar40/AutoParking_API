'use strict'
const port = process.env.PORT || 3000
const conect = require ('./config')
const dato = require ('./models/dato')

const app = require ('./app')



//llamamos al paquete mysql que hemos instalado
const mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    {
		 host: 'us-cdbr-sl-dfw-01.cleardb.net',
		  user: 'bd84f383c0825e',
		  password: '1c361825',
		  database: 'ibmsl_87bbd800f198a455470d'
    }
);
connection.connect()



app.listen(port,() =>
{
  console.log(`API Rest Corriendo en  http://localhost:${port}`)
})

module.exports = app;
