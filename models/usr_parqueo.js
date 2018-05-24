'use strict'

const db = require('../config') //reference of dbconnection.js

const parqueo = {
    getAllParqueo: function(callback) {
        return db.query("SELECT * FROM usr_parqueo", callback)
    },
    getParqueoById: function(parqueoId, callback) {
        return db.query("SELECT * FROM autoparking.usr_parqueo WHERE id_parqueo = ?", [parqueoId], callback)
    },
    addParqueo: function(usr_parqueo, callback) {

        return db.query("Insert into usr_parqueo values(?,?,?,?,?,?,?,?,?)", [usr_parqueo.id_parqueo, usr_parqueo.nombre_parqueo, usr_parqueo.direccion_parqueo, usr_parqueo.lugares_disponibles, usr_parqueo.total_lugares, usr_parqueo.user_parqueo,usr_parqueo.pass_parqueo, usr_parqueo.ubicacion_idubicacion, usr_parqueo.datos_iddatos], callback)
    },
    deleteParqueo: function(parqueoId, callback) {
        return db.query("DELETE FROM usr_parqueo WHERE id_parqueo = ?", [parqueoId], callback)
    },
    updateParqueo: function(parqueoId, usr_parqueo, callback) {

        return db.query("UPDATE usr_parqueo SET nombre_parqueo=?, direccion_parqueo=?, lugares_disponibles= ?, total_lugares=?, user_parqueo=?, pass_parqueo=? , ubicacion_idubicacion=?, datos_iddatos=?  WHERE id_parqueo=? ", [usr_parqueo.nombre_parqueo, usr_parqueo.direccion_parqueo, usr_parqueo.lugares_disponibles, usr_parqueo.total_lugares, usr_parqueo.user_parqueo, usr_parqueo.pass_parqueo, usr_parqueo.ubicacion_idubicacion,
        usr_parqueo.datos_iddatos, parqueoId], callback)
    }
};
module.exports = parqueo;
