'use strict'


const db = require('../config') //reference of dbconnection.js
const dato = {
    getAllDatos: function(callback) {
        return db.query("SELECT * FROM datos", callback)
    },
    getDatoById: function(datoId, callback) {
        return db.query("SELECT * FROM datos WHERE id_datos = ?", [datoId], callback)
    },
    addDato: function(dato, callback) {
        return db.query("Insert into datos values(?,?,?,?,?)", [dato.id_datos, dato.Nombre, dato.Apellido, dato.Direccion, dato.Correo], callback)
    },
    deleteDato: function(datoId, callback) {
        return db.query("DELETE FROM datos WHERE id_datos = ?", [datoId], callback)
    },
    updateDato: function(datoId, dato, callback) {
        return db.query("UPDATE datos SET Nombre=?,Apellido=?, Direccion=?, Correo=? WHERE id_datos=?", [dato.Nombre, dato.Apellido, dato.Direccion, dato.Correo, datoId], callback)
    }
};
module.exports = dato;
