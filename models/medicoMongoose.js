const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const medicoSchema = new mongoose.Schema({
    dni: { type: String, unique: true },
    nombre: { type: String },
    email: { type: String },
    edad: { type: Number },
    telf: { type: Number },
    especialidad: { type: String },
}, { collection: 'centro_medico.medicos' });


const Medico = mongoose.model('medicos', medicoSchema);

module.exports = Medico;