'use strict'

const express = require('express')
const api = express.Router()
const datoControllers = require ('../controllers/dato')

//METODO para lA table datos

api.get('/dato',datoControllers.getDatos)
api.get ('/dato/:datoId', datoControllers.getDato)
api.post ('/dato', datoControllers.postDato)
api.put ('/dato/:id_datos', datoControllers.updateDato)
api.delete ('/dato/:datoId', datoControllers.deleteDato)





const paisController = require('../controllers/pais')

api.get('/pais',paisController.getPaises)
api.get ('/pais/:paisId', paisController.getPais)
api.post ('/pais', paisController.postPais)
api.put ('/pais/:id_pais', paisController.updatePais)
api.delete ('/pais/:paisId',paisController.deletePais)


// ****************************************//
const ciudadController = require ('../controllers/ciudad')

api.get('/ciudad',ciudadController.getCiudades)
api.get ('/ciudad/:ciudadId', ciudadController.getCiudad)
api.post ('/ciudad', ciudadController.postCiudad)
api.put ('/ciudad/:id_ciudad', ciudadController.updateCiudad)
api.delete ('/ciudad/:ciudadId', ciudadController.deleteCiudad)


// ****************************************//


const ubicaController = require ('../controllers/ubicacion')

api.get('/ubicacion',ubicaController.getUbicaciones)
api.get ('/ubicacion/:ubicacionId', ubicaController.getUbicacion)
api.post ('/ubicacion', ubicaController.postUbicacion)
api.put ('/ubicacion/:id_ubicacion', ubicaController.updateUbicacion)
api.delete ('/ubicacion/:ubicacionId',ubicaController.deleteUbicacion)



//****************************************//


const parqueoController = require ('../controllers/parqueo')
api.get ('/parqueo', parqueoController.getParqueos )
api.get ('/parqueo/:parqueoId', parqueoController.getParqueo)
api.post ('/parqueo', parqueoController.postParqueo)
api.put ('/parqueo/:id_parqueo', parqueoController.updateParqueo )
api.delete ('/parqueo/:parqueoId', parqueoController.deleteParqueo)


//METODO para sub consultas
const subConsultasController = require ('../controllers/subConsultas')
api.get ('/subConsultas/:subConsultasId', subConsultasController.getsubConsulta)

//.............................................//

module.exports = api
