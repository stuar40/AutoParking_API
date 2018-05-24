'use strict'


const db = require('../config') //reference of dbconnection.js
const ciudad = {
    getAllCiudad: function(callback) {
        return db.query("SELECT * FROM ciudad", callback)
    },
    getCiudadById: function(ciudadId, callback) {
        return db.query("SELECT * FROM ciudad WHERE id_ciudad = ?", [ciudadId], callback)
    },
    addCiudad: function(ciudad, callback) {

        return db.query("Insert into ciudad values(?,?,?)", [ciudad.id_ciudad, ciudad.nombre_ciudad, ciudad.pais_idpais], callback)
    },
    deleteCiudad: function(ciudadId, callback) {
        return db.query("DELETE FROM ciudad WHERE id_ciudad = ?", [ciudadId], callback)
    },
    updateCiudad: function(ciudadId, ciudad, callback) {

        return db.query("UPDATE ciudad SET nombre_ciudad=?, pais_idpais=?  WHERE id_ciudad=?", [ciudad.nombre_ciudad, ciudad.pais_idpais, ciudadId], callback)
    }
};
module.exports = ciudad;
