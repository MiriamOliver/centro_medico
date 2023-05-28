const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const pacienteSchema = new mongoose.Schema({
    dni: { 
        type: String, 
        unique: true,
        require: true 
    },
    nombre: { 
        type: String,
        require: true
    },
    email: { 
        type: String,
        unique:true,
        require: true
    },
    edad: { 
        type: Number,
        require: true
    },
    telf: { 
        type: Number,
        unique:true,
        require: true
    },
    seguro: { 
        type: Number,
        unique:true,
        require: true
    },
}, { collection: 'pacientes' });


const Paciente = mongoose.model('pacientes', pacienteSchema);

module.exports = Paciente;