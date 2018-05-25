'use strict'
const dato = require ('../models/dato')


//===========================================

function getDato(req,res)
{
  /*
  let datoId = req.params.datoId
  connection.query("SELECT * FROM datos WHERE id_datos = ?",datoId,function (error, results, fields) {
  if (error) throw error
  return res.send ({error: false, data: results[0], message: 'Search List' })
  })*/

  dato.getDatoById (req.params.datoId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
}

//=======================================================

function getDatos(req, res)
{
  dato.getAllDatos(function(err, rows) {
              if (err) {
                  res.json(err);
              } else {
                  res.json(rows);
              }
          });

}


//========================================================================
function postDato(req, res)
{
  /*
    console.log(req.body)
    let id_datos = req.body.id_datos
    let Nombre = req.body.Nombre
    let Apellido = req.body.Apellido
    let Direccion = req.body.Direccion
    let Correo = req.body.Correo

    if (!id_datos) {
         return res.status(400).send({ error:true, message: 'Please agregaa  dato' })
              }
  // SET ?,?,?,?,? ",{id_datos:id_datos, Nombre:Nombre, Apellido:Apellido, Direccion:Direccion, Correo:Correo}
  //
      connection.query ('INSERT INTO  datos (id_datos, Nombre, Apellido, Direccion, Correo) VALUES ("' +id_datos+ '","' +Nombre+ '","' +Apellido+ '","' +Direccion+ '","' +Correo+ '")', function (error, results, fields) {
        if(error) throw error
        return res.send({error: false, data: results, message: 'New task has been created successfully.'})
  })*/

  dato.addDato(req.body, function(err, count) {
          if (err) {
              res.json(err);
          } else {
              res.json(req.body); //or return count for 1 & 0
          }
      });
}



//=======================================================================
function updateDato(req, res)
{
  /*
  let id_datos =req.params.id_datos
  let Nombre = req.body.Nombre
  let Apellido = req.body.Apellido
  let Direccion = req.body.Direccion
  let Correo = req.body.Correo

  if (!id_datos) {
          return res.status(400).send({ error: id_datos, message: 'Please provide task and task_id' })
                }

  connection.query("UPDATE datos SET Nombre=?,Apellido=?, Direccion=?, Correo=? WHERE id_datos=?" ,[Nombre, Apellido, Direccion, Correo, id_datos], function (error, results, fields) {
   if (error) throw error
   return res.send({ error: false, data: results, message: 'Task has been updated successfully.' })
  })*/

  dato.updateDato(req.params.id_datos, req.body, function(err, rows) {
         if (err) {
             res.json(err);
         } else {
             res.json(rows);
         }
     });

}

//=============================================================
function deleteDato(req, res)
{
  /*
  let datoId = req.params.datoId
  connection.query('DELETE FROM datos WHERE id_datos = ?', [datoId], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'se ha eliminado con exito' });
    })*/

    dato.deleteDato(req.params.datoId, function(err, count) {
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
  getDato,
  getDatos,
  postDato,
  updateDato,
  deleteDato
}
