const {response,request} = require('express');
const ConexionMedico = require('../controllers/conexion/medicoConexion');
const medicos = require('../models/medicoMongoose');
const conx = new ConexionMedico();


const createMedico =  (req = request, res = response) => {
    medicos.insertMany({
         id: req.body.id,
         nombre: req.body.nombre,
         edad : req.body.edad,
         email: req.body.email,
         telf: req.body.telf
    }, (err, medicos) => {
         if (err) {
             console.log('Error en el registro!');
             res.status(203).json(err);
             throw err;
         }
         console.log('Registro correcto!');
         res.status(201).json(medicos);
     });
 }

 module.exports = {
    createMedico,
 }