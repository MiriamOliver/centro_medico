const mongoose = require("mongoose");
const  medicos = require('../../models/medico');

    
    const registrarMedico = async(medico) => {
        
        result = '';

        result = await medicos.create(medico);

        return result;
    }

    const registrarMedicos = async(listamedicos) => {

        console.log(listamedicos);

        let result = await medicos.insertMany(listamedicos);

        return result;
    }

    const listaMedicos = async() => {
        
        result = '';

        result = await medicos.find();

        return result;
    }

    const getMedico = async(dni) => {
        
        result = '';

        result = await medicos.find({dni:dni});

        return result;
    }

    const deleteMedico = async(dni) => {
        
        result = '';

        result = await medicos.deleteOne({dni:dni});

        return result;
    }

    const updateMedico = async(dni, medico) => {
        
        result = '';

        result = await medicos.updateOne({dni:dni}, medico);

        return result;
    }

module.exports = {
    registrarMedico,
    listaMedicos,
    getMedico,
    deleteMedico,
    updateMedico,
    registrarMedicos
};