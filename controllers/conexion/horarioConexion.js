const mongoose = require("mongoose");
const  horario = require('../../models/horario');

const crearHorario = async (horario) => {
    console.log(horario)
}

const conseguirHorario = async () => {
    return await horario.find();
}

module.exports = {
    crearHorario,
    conseguirHorario
}