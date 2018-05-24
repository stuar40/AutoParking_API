'use strict'


const db = require('../config') //reference of dbconnection.js
const dato = {

    getsubConsultaById: function(datoId, callback) {
        return db.query("CALL sp_consultaZona(?)", [datoId], callback)
    }

};
module.exports = dato;
