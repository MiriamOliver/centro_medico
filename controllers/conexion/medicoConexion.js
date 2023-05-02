const mongoose = require("mongoose");
const  medicos = require('../../models/medico');

    
    const registrarMedico = async(medico) => {

        console.log(medicos);
        
        result = '';

        result = await medicos.create(medico);

        return result;
    }

    const listaMedicos = async() => {
        
        result = '';

        result = await medicos.find();
        console.log(result);

        return result;
    }

    const deleteMedico = async(dni) => {
        
        result = '';

        result = await medicos.deleteOne({dni:dni});
        console.log(result);

        return result;
    }

module.exports = {
    registrarMedico,
    listaMedicos,
    deleteMedico
};