const {response,request} = require('express');
const conx = require('../controllers/conexion/medicoConexion')


    const createMedico = async(req = request, res = response) => {

        try{
            const medicos = await conx.registrarMedico({
                dni: req.body.dni,
                nombre: req.body.nombre,
                edad : req.body.edad,
                email: req.body.email,
                telf: req.body.telf,
                especialidad: req.body.especialidad
           });
           res.status(201).json(medicos);
        }catch(err){
            console.log(err);
            res.status(203).json(err);
        }
    }

    const listarMedicos = async(req = request, res = response) => {
        try{
            const medicos = await conx.listaMedicos();
            res.status(200).json(medicos);
        }catch(err){
            console.log(err);
            res.status(203).json(err);
        }
    }

    const borrarMedico = async(req = request, res = response) => {
        try{
            await conx.deleteMedico(req.params.dni);
            res.status(200).json({msg:'medico borrado con éxito'});
        }catch(err){
            console.log(err);
            res.status(203).json(err);
        }
    }

    const modificarMedico = async(req = request, res = response) => {
        try{
            const medico = await conx.updateMedico(req.params.dni, {
                dni: req.body.dni,
                nombre: req.body.nombre,
                edad : req.body.edad,
                email: req.body.email,
                telf: req.body.telf,
                especialidad: req.body.especialidad
            });
            res.status(200).json(medico);
        }catch(err){
            console.log(err);
            res.status(203).json(err);
        }
    }

 module.exports = {
    createMedico,
    listarMedicos,
    borrarMedico,
    modificarMedico
 }