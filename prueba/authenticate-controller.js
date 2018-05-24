'use strict'

const jwt=require('jsonwebtoken');
const connection = require('./../config');


module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var pass_parqueo=req.body.pass_parqueo;
    connection.query('SELECT * FROM pass_parqueo WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
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
                  message:"Email and pass_parqueo does not match"
                 });
            }

        }
        else{
          res.json({
              status:false,
            message:"Email does not exits"
          });
        }
      }
    });
}
