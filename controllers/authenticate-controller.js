'use strict'

const jwt=require('jsonwebtoken');
const connection = require('./../config');
module.exports.authenticate=function(req,res){
    var user_parqueo=req.body.user_parqueo;
    var pass_parqueo=req.body.pass_parqueo;
    connection.query('SELECT * FROM usr_parqueo WHERE user_parqueo = ?',[user_parqueo], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'terror en el query'
            })
      }else{
        if(results.length >0){
            if(pass_parqueo==results[0].pass_parqueo){
                var token=jwt.sign(results[0],process.env.SECRET_KEY,{
                    expiresIn:5000
                });
                res.json({
                    status:true,
                    token:token
                })
            }else{
                res.json({
                  status:false,
                  message:"contraseña incorrecta"
                 });
            }

        }
        else{
          res.json({
              status:false,
            message:"usario incorrecto"
          });
        }
      }
    });
}
