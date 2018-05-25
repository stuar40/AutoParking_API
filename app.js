'use strict'
const express = require ('express')
const bodyParser= require('body-parser')
var jwt= require("jsonwebtoken");
const app  = express()
const api = require('./routes')
var router=express.Router();

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

process.env.SECRET_KEY="thisismysecretkey";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//importando controllers
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/register',registerController.register);

const datoControllers = require ('./controllers/dato')

app.use('/secure-api',router);

app.use('/api', api)

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



module.exports = app
