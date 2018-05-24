const mysql = require('mysql');

const connection = mysql.createConnection(
    {
		 host: 'us-cdbr-sl-dfw-01.cleardb.net',
		  user: 'bd84f383c0825e',
		  password: '1c361825',
		  database: 'ibmsl_87bbd800f198a455470d'
    }
)
module.exports = connection;
