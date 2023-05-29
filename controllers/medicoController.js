const {response,request} = require('express');
const conx = require('../controllers/conexion/medicoConexion')
const factoria = require('../helpers/factorias');


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

    const conseguirMedico = async(req = request, res = response) => {
        try{
            const medico = await conx.getMedico(req.params.dni);
            res.status(200).json(medico);
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

    const generarMedicos = async(req = request, res = response) => {

        const especialidades = ['Medicina general', 'Rodillología', 'Ojología', 'Golpenloslomoslogía', 'Tontología', 'Gargantología'];
        const medicos = [];
    

        especialidades.forEach(especialidad => {
            for (let i = 0; i < 3; i++) {
                medicos.push(factoria.factoriaMedico(especialidad));
            }
        })
    
        try {
            const resp = await conx.registrarMedicos(medicos);

            res.status(200).json(resp);

        } catch (err) {
            res.status(200).json({ 'msg': 'Error en generar medicos', 'err': err });
        }
    }

 module.exports = {
    createMedico,
    listarMedicos,
    conseguirMedico,
    borrarMedico,
    modificarMedico,
    generarMedicos
 }