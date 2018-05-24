'use strict'
const dato = require ('../models/subConsultas')


//===========================================

function getsubConsulta(req,res)
{

  dato.getsubConsultaById (req.params.subConsultasId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
}

//=======================================================


////============================================================
module.exports=
{
  getsubConsulta
}
