'use strict'


const db = require('../config') //reference of dbconnection.js
const pais = {
    getAllPais: function(callback) {
        return db.query("SELECT * FROM pais", callback)
    },
    getPaisById: function(paisId, callback) {
        return db.query("SELECT * FROM pais WHERE id_pais = ?", [paisId], callback)
    },
    addPais: function(pais, callback) {
        return db.query("Insert into pais values(?,?)", [pais.id_pais, pais.nom_pais], callback)
    },
    deletePais: function(paisId, callback) {
        return db.query("DELETE FROM pais WHERE pais.id_pais = ?", [paisId], callback)
    },
    updatePais: function(paisId, pais, callback) {

        return db.query("UPDATE pais SET nom_pais=? WHERE id_pais=?", [pais.nom_pais, paisId], callback)
    }
};
module.exports = pais;



// ****************************************//
