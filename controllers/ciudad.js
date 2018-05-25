'use strict'
const ciudad = require ('../models/ciudad')

//=====================================================
function getCiudad(req,res)
{

  ciudad.getCiudadById (req.params.ciudadId, function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });
}

//=====================================================
function getCiudades(req, res)
{

  ciudad.getAllCiudad(function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });
}

//=====================================================
function postCiudad(req, res)
{

  ciudad.addCiudad(req.body, function(err, count) {
          if (err) {
              res.json(err);
          } else {
              res.json(req.body); //or return count for 1 & 0
          }
      });

}

//=====================================================
function updateCiudad(req, res)
{

  ciudad.updateCiudad(req.params.id_ciudad, req.body, function(err, rows) {
         if (err) {
             res.json(err);
         } else {
             res.json(rows);
         }
     });

}

function deleteCiudad(req, res)
{

    ciudad.deleteCiudad(req.params.ciudadId, function(err, count) {
             if (err) {
                 res.json(err);
             } else {
                 res.json(count);
             }
         });
}

module.exports=
{
  getCiudad,
  getCiudades,
  postCiudad,
  updateCiudad,
  deleteCiudad
}
