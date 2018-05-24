'use strict'

const db = require('../config') //reference of dbconnection.js

const ubicacion = {
    getAllUbicacion: function(callback) {
        return db.query("SELECT * FROM ubicacion", callback)
    },
    getUbicacionById: function(ubicacionId, callback) {
        return db.query("SELECT * FROM ubicacion WHERE id_ubicacion = ?", [ubicacionId], callback)
    },
    addUbicacion: function(ubicacion, callback) {

        return db.query("Insert into ubicacion values(?,?,?,?,?,?,?)", [ubicacion.id_ubicacion, ubicacion.coordenadas, ubicacion.longitud, ubicacion.latitud, ubicacion.ciudad_idciudad, ubicacion.usr_parqueo_id_parqueo, ubicacion.usr_auto_idusr_auto], callback)
    },
    deleteUbicacion: function(ubicacionId, callback) {
        return db.query("DELETE FROM ubicacion WHERE id_ubicacion = ?", [ubicacionId], callback)
    },
    updateUbicacion: function(ubicacionId, ubicacion, callback) {

        return db.query("UPDATE ubicacion SET coordenadas=?, longitud=?, latitud= ?, ciudad_idciudad=?, usr_parqueo_id_parqueo=? ,usr_auto_idusr_auto=? WHERE id_ubicacion=?", [ubicacion.coordenadas, ubicacion.longitud, ubicacion.latitud, ubicacion.ciudad_idciudad, ubicacion.usr_parqueo_id_parqueo, ubicacion.usr_auto_idusr_auto, ubicacionId], callback)
    }
};
module.exports = ubicacion;
