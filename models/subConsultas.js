'use strict'


const db = require('../config') //reference of dbconnection.js
const dato = {

    getsubConsultaById: function(datoId, callback) {
        return db.query("SELECT * FROM datos WHERE id_datos = ?", [datoId], callback)
    }

};
module.exports = dato;
