const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const horarioSchema = new mongoose.Schema({
    id: { 
        type: String, 
        unique: true,
        require: true 
    },
    dia: { 
        type: String,
        require: true,
        enum : ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
    },
    turno: { 
        type: String,
        require: true,
        enum : ['Mañana','Tarde']
    },
    consulta:{
        type: [{
            dniMedico: { type: String },
            dniPacientes: [{ type: String }]
        }],
        required: false
    }
}, { collection: 'horario' });


const Horario = mongoose.model('horario', horarioSchema);

module.exports = Horario;