const {response,request} = require('express');
const conx = require('../controllers/conexion/pacienteConexion')


const createPaciente =  async(req = request, res = response) => {

    try{
        const paciente = await conx.registrarPaciente({
            dni: req.body.dni,
            nombre: req.body.nombre,
            edad : req.body.edad,
            email: req.body.email,
            telf: req.body.telf,
            seguro: req.body.seguro
       });
       res.status(201).json(paciente);
    }catch(err){
        console.log(err);
        res.status(203).json(err);
    }
}

const listadoPacientes = async(req = request, res = response) => {
    try{
        const pacientes = await conx.listaPaciente();
        res.status(200).json(pacientes);
    }catch(err){
        console.log(err);
        res.status(203).json(err);
    }
}

const borrarPaciente = async(req = request, res = response) => {
    try{
        await conx.deletePaciente(req.params.dni);
        res.status(200).json({msg:'paciente borrado con éxito'});
    }catch(err){
        console.log(err);
        res.status(203).json(err);
    }
}

const modificarPaciente = async(req = request, res = response) => {
    try{
        const paciente = await conx.updatePaciente(req.params.dni, {
            dni: req.body.dni,
            nombre: req.body.nombre,
            edad : req.body.edad,
            email: req.body.email,
            telf: req.body.telf,
            seguro: req.body.seguro
        });
        res.status(200).json(paciente);
    }catch(err){
        console.log(err);
        res.status(203).json(err);
    }
}

 module.exports = {
    createPaciente,
    listadoPacientes,
    borrarPaciente,
    modificarPaciente
 }