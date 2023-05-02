const medico = require('../models/medico');

const emailMedicoExiste = async( email ) => {

    const existeEmail = await medico.findOne({"email": email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

const existeMedicoDni = async( dni ) => {

    const existeUsuario = await medico.findOne({"dni": dni});

    if ( existeUsuario ) {
        throw new Error(`El id ${ id } existe `);
    }
}

const emailPacienteExiste = async( email ) => {

    const existeEmail = await medico.findOne({"email": email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

const existePacienteDni = async( dni ) => {

    const existeUsuario = await medico.findOne({"dni": dni});

    if ( existeUsuario ) {
        throw new Error(`El id ${ id } existe `);
    }
}

const edadCorrecta = async(edad)=>{
    if (edad < 0){
        throw new Error('Edad incorrecta');
    }
}

module.exports = {
    emailMedicoExiste,
    existeMedicoDni,
    emailPacienteExiste,
    existePacienteDni,
    edadCorrecta
}