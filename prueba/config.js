/*const mysql = require('mysql');

const connection = mysql.createConnection(
    {
		 host: '160.153.16.62',
		  user: 'autoparking2018',
		  password: 'autoparking@2018',
		  database: 'autoparking_v1'
    }
)
module.exports = connection;
*/


var mysql = require('mysql');

var mysqlPool  = mysql.createPool({
    host : "160.153.16.62",
    user : "autoparking2018",
    password: "autoparking@2018",
    database :"autoparking_v1",
    port:3306

});

module.exports = mysqlPool;
