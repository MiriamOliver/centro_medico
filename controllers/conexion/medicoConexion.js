const mongoose = require("mongoose");
const medicos = require('../models/medicoMongoose.js');

class ConexionMedico {

    constructor(options) {
        mongoose.connect("mongodb://" + process.env.DB_URL + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE);
    }  
    
    registrarMedico = async(dni, nombre, email, edad, telf, especialidad) => {

    }
}

module.exports = ConexionMedico;