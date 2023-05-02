const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const pacienteSchema = new mongoose.Schema({
    dni: { type: String, unique: true },
    nombre: { type: String },
    email: { type: String },
    edad: { type: Number },
    telf: { type: Number },
    seguro: { type: Number },
}, { collection: 'centro_medico.pacientes' });


const Paciente = mongoose.model('pacientes', pacienteSchema);

module.exports = Paciente;