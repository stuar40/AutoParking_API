'use strict'

const parqueo = require ('../models/usr_parqueo')


//===========================================

function getParqueo(req,res)
{
  parqueo.getParqueoById (req.params.parqueoId, function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });

}

//=======================================================

function getParqueos(req, res)
{
  parqueo.getAllParqueo(function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });

}


//========================================================================
function postParqueo(req, res)
{
  parqueo.addParqueo(req.body, function(err, count) {
          if (err) {
              res.json(err);
          } else {
              res.json(req.body); //or return count for 1 & 0
          }
      });
}



//=======================================================================
function updateParqueo(req, res)
{
  parqueo.updateParqueo(req.params.id_parqueo, req.body, function(err, rows) {
         if (err) {
             res.json(err);
         } else {
             res.json(rows);
         }
     });


}

//=============================================================
function deleteParqueo(req, res)
{
  parqueo.deleteParqueo(req.params.parqueoId, function(err, count) {
         if (err) {
             res.json(err);
         } else {
             res.json(count);
         }
     });

}

////============================================================
module.exports=
{
  getParqueo,
  getParqueos,
  postParqueo,
  updateParqueo,
  deleteParqueo
}
