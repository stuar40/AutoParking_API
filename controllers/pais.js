'use strict'
const pais = require ('../models/pais')
//=====================================================
function getPais(req,res)
{
  pais.getPaisById (req.params.paisId, function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });
}

//=====================================================
function getPaises(req, res)
{
  pais.getAllPais(function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });
}
//=====================================================
function postPais(req, res)
{
  pais.addPais(req.body, function(err, count) {
          if (err) {
              res.json(err);
          } else {
              res.json(req.body); //or return count for 1 & 0
          }
      });
}
//=====================================================
function updatePais(req, res)
{
  pais.updatePais(req.params.id_pais, req.body, function(err, rows) {
         if (err) {
             res.json(err);
         } else {
             res.json(rows);
         }
     });
}
//=====================================================
function deletePais(req, res)
{
  pais.deletePais(req.params.paisId, function(err, count) {
         if (err) {
             res.json(err);
         } else {
             res.json(count);
         }
     });
}
//=====================================================

module.exports=
{
  getPais,
  getPaises,
  postPais,
  updatePais,
  deletePais
}
