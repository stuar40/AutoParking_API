'use strict'
const ubicacion = require ('../models/ubicacion')

//=====================================================
function getUbicacion(req,res)
{

  ubicacion.getUbicacionById (req.params.ubicacionId, function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });


}

//=====================================================
function getUbicaciones(req, res)
{


  ubicacion.getAllUbicacion(function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });


}

//=====================================================
function postUbicacion(req, res)
{

  ubicacion.addUbicacion(req.body, function(err, count) {
          if (err) {
              res.json(err);
          } else {
              res.json(req.body); //or return count for 1 & 0
          }
      });
}

//=====================================================
function updateUbicacion(req, res)
{

  ubicacion.updateUbicacion(req.params.id_ubicacion, req.body, function(err, rows) {
         if (err) {
             res.json(err);
         } else {
             res.json(rows);
         }
     });

}

function deleteUbicacion(req, res)
{

      ubicacion.deleteUbicacion(req.params.ubicacionId, function(err, count) {
             if (err) {
                 res.json(err);
             } else {
                 res.json(count);
             }
         });
}

module.exports=
{
  getUbicacion,
  getUbicaciones,
  postUbicacion,
  updateUbicacion,
  deleteUbicacion
}
