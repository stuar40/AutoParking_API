var jwt=require('jsonwebtoken');
var connection = require('./../config');

module.exports.register=function(req,res){
  var userData = {
    "Nombre": req.body.Nombre,
    "Apellido": req.body.Apellido,
    "Pass": req.body.Pass,
    "Correo": req.body.Correo
  }
    connection.query('INSERT INTO datos SET ?',userData, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            userData:results,
            message:'user registered sucessfully'
        })
      }
    });
}
