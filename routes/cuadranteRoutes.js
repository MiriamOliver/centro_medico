const {Router } = require('express');
const router = Router();
const controlador = require('../controllers/horarioController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { dniRegistrado } = require('../helpers/db-validators');


router.get('/generar', controlador.generarHorario); //genera el horario con su dias, turnos y medicos

router.get('/mostrar', controlador.mostrarHorario); //muestra el horario con sus datos

router.put('/cita/pedir/:dni', 
[
    check('dniMedico').custom( dniRegistrado ),
    check('dniMedico', 'El DNI es obligatorio').not().isEmpty(),
    check('dia', 'El dia es obligatorio').not().isEmpty(),
    check('dia', 'No es un dia válido').isIn(['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']),
    check('turno', 'El turno es obligatorio').not().isEmpty(),
    check('turno', 'No es un turno válido').isIn(['Mañana','Tarde']),
    validarCampos
], controlador.crearCita);  // crear cita, especificando el dni del paciente que pide la cita en la ruta
                             // y dando de datos el dia, el turno y el dni del medico que necesitas

router.put('/cita/cancelar/:dni', 
[
    check('dniMedico').custom( dniRegistrado ),
    check('dniMedico', 'El DNI es obligatorio').not().isEmpty(),
    check('dia', 'El dia es obligatorio').not().isEmpty(),
    check('dia', 'No es un dia válido').isIn(['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']),
    check('turno', 'El turno es obligatorio').not().isEmpty(),
    check('turno', 'No es un turno válido').isIn(['Mañana','Tarde']),
    validarCampos
], controlador.cancelarCita); //cancelar cita, especificando el dni del paciente que pide la cita en la ruta
                              // y dando de datos el dia, el turno y el dni del medico que necesitas

router.get('/citas/paciente/:dni', controlador.verCitasPaciente);  //mostrar citas de un paciente por su dni

router.get('/citas/paciente/:dia/:dni', controlador.verCitasPacienteDia);  //mostrar citas de un paciente por su dni en un dia

module.exports = router;