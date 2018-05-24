'use strict'


const db = require('../config') //reference of dbconnection.js
const dato = {

	 getReferenciaById: function(referenciaId, callback) {
		  return db.query("CALL sp_consultaReferencia(?)", [referenciaId], callback)
	 }

};
module.exports = dato;
