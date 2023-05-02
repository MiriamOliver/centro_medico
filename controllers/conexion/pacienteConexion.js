const mongoose = require("mongoose");
const usuarios = require('../models/pacienteMongoose.js');

class Conexion {

    constructor(options) {
        mongoose.connect("mongodb://" + process.env.DB_URL + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE);
    }    
}

module.exports = Conexion;