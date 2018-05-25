'use strict'
const express = require ('express')
const bodyParser= require('body-parser')
const jwt= require("jsonwebtoken")
const app  = express()
const api = require('./routes')

const authenticateController=require('./controllers/authenticate-controller');
const registerController=require('./controllers/register-controller');

process.env.SECRET_KEY="thisismysecretkey";
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/register',registerController.register);


app.use('/secure-api',router);


//importando controllers

const datoControllers = require ('./controllers/dato')

// validacion middleware
router.use(function(req,res,next){
    var token=req.body.token || req.headers['token'];
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,function(err,ress){
            if(err){
                res.status(500).send('Token Invalid');
            }else{
                next();
            }
        })
    }else{
        res.send('Please send a token')
    }
})

router.get('/home',function(req,res){
    res.send('Token Verified')
})

app.use('/api', api)





module.exports = app
