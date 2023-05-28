const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const medicoSchema = new mongoose.Schema({
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
    especialidad: { 
        type: String,
        require: true,
        enum : ['Medicina general','Rodillología','Ojología','Golpenloslomoslogia','Tontología','Gargantología']
    },
}, { collection: 'medicos' });


const Medico = mongoose.model('medicos', medicoSchema);

module.exports = Medico;