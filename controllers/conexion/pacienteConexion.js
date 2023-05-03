const mongoose = require("mongoose");
const pacientes = require('../../models/paciente');

const registrarPaciente = async(paciente) => {
    
    result = '';

    result = await pacientes.create(paciente);

    return result;
}

const listaPaciente = async() => {
    
    result = '';

    result = await pacientes.find();

    return result;
}

const deletePaciente = async(dni) => {
        
    result = '';

    result = await pacientes.deleteOne({dni:dni});

    return result;
}

const updatePaciente = async(dni, paciente) => {
        
    result = '';

    result = await pacientes.updateOne({dni:dni}, paciente);

    return result;
}


module.exports = {
    registrarPaciente,
    listaPaciente,
    deletePaciente,
    updatePaciente
};

