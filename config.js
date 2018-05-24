const mysql = require('mysql');

const connection = mysql.createConnection(
    {
      host: '160.153.16.62',
  		  user: 'autoparking2018',
  		  password: 'autoparking@2018',
  		  database: 'autoparking_v1'
    }
)
module.exports = connection;
