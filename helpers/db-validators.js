const Medico = require('../models/medicoMongoose');
const medicoConexion = require('../controllers/medicoController');
const conx = new medicoConexion();


const emailMedicoExiste = async( email = '' ) => {

    const existeEmail = await Medico.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

const existeMedicoDni = async( dni ) => {

    const existeUsuario = await Medico.findOne({"dni": dni});
    if ( existeUsuario ) {
        throw new Error(`El id ${ id } existe `);
    }
}

const edadCorrecta = async(edad)=>{
    if (edad <0){
        throw new Error('Edad incorrecta');
    }
}


module.exports = {
    emailMedicoExiste,
    existeMedicoDni,
    edadCorrecta
}