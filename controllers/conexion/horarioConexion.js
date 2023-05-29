const mongoose = require("mongoose");
const  horario = require('../../models/horario');

const crearHorario = async (cuadrante) => {

    let result = await horario.insertMany(cuadrante);

    return result;
}

const conseguirHorario = async () => {
    return await horario.find();
}

module.exports = {
    crearHorario,
    conseguirHorario
}