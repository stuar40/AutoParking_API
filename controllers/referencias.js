'use strict'
const dato = require ('../models/referencias')


//=======================================================
function getReferencia(req,res)
{

  dato.getReferenciaById (req.params.referenciasId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
}

////============================================================
module.exports=
{
  getReferencia
}
