'use strict'
var mysql = require('mysql');

var mysqlPool  = mysql.createPool({
    host : "160.153.16.62",
    user : "autoparking2018",
    password: "autoparking@2018",
    database :"autoparking_v1",
    port:3306

});


const db = require('../config') //reference of dbconnection.js
const ciudad = {
    getAllCiudad: function(callback) {
      var allCiudad = "SELECT * FROM ciudad"; //here store sql query in strQuery variable.
      mysqlPool.getConnection(function(err, connection) {
                if(err) throw err;
                connection.query(allCiudad, function(err, rows) {
                if(err) {// if error occures goes here.
                      connection.end(); // if error occured closed the connection
                      console.error(err);
                      return;
                        }//If no error here you get your query output.
                  return connection.query("SELECT * FROM ciudad", callback);
                  connection.end();// After performing the operation then closed the connection.
              });                   });

    },

    //**************************************************
    getCiudadById: function(ciudadId, callback) {
      var CiudadById = "SELECT * FROM ciudad"; //here store sql query in strQuery variable.
      mysqlPool.getConnection(function(err, connection) {
                if(err) throw err;
                connection.query(CiudadById, function(err, rows) {
                if(err) {// if error occures goes here.
                      connection.end(); // if error occured closed the connection
                      console.error(err);
                      return;
                        }//If no error here you get your query output.
                  return db.query("SELECT * FROM ciudad WHERE id_ciudad = ?", [ciudadId], callback)
                  connection.end();// After performing the operation then closed the connection.
              });                   });
    },

//*********************************************************************


    addCiudad: function(ciudad, callback) {

      var adCiudad ="SELECT * FROM ciudad"; //here store sql query in strQuery variable.
      mysqlPool.getConnection(function(err, connection) {
                if(err) throw err;
                connection.query(adCiudad, function(err, rows) {
                if(err) {// if error occures goes here.
                      connection.end(); // if error occured closed the connection
                      console.error(err);
                      return;
                        }//If no error here you get your query output.
                  return db.query("Insert into ciudad values(?,?,?)", [ciudad.id_ciudad, ciudad.nombre_ciudad, ciudad.pais_idpais], callback)
                  connection.end();// After performing the operation then closed the connection.
              });                   });
        },


        //*******************************************************************
    deleteCiudad: function(ciudadId, callback) {
      var delCiudad ="SELECT * FROM ciudad" ; //here store sql query in strQuery variable.
      mysqlPool.getConnection(function(err, connection) {
                if(err) throw err;
                connection.query(delCiudad, function(err, rows) {
                if(err) {// if error occures goes here.
                      connection.end(); // if error occured closed the connection
                      console.error(err);
                      return;
                        }//If no error here you get your query output.
                  return db.query("DELETE FROM ciudad WHERE id_ciudad = ?", [ciudadId], callback)
                  connection.end();// After performing the operation then closed the connection.
              });                   });
    },

    //*************************************************************************************************
    updateCiudad: function(ciudadId, ciudad, callback) {

      var upCiudad ="SELECT * FROM ciudad"; //here store sql query in strQuery variable.
      mysqlPool.getConnection(function(err, connection) {
                if(err) throw err;
                connection.query(upCiudad, function(err, rows) {
                if(err) {// if error occures goes here.
                      connection.end(); // if error occured closed the connection
                      console.error(err);
                      return;
                        }//If no error here you get your query output.
                    return db.query("UPDATE ciudad SET nombre_ciudad=?, pais_idpais=?  WHERE id_ciudad=?", [ciudad.nombre_ciudad, ciudad.pais_idpais, ciudadId], callback)
                  connection.end();// After performing the operation then closed the connection.
              });                   });
    }
};
module.exports = ciudad;
