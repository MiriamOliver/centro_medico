const {Router } = require('express');
const router = Router();
const controlador = require('../controllers/pacienteController')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { edadCorrecta, emailPacienteExiste, existePacienteDni } = require('../helpers/db-validators');

router.post('/registro', 
[
    check('dni').custom( existePacienteDni ),
    check('dni', 'El DNI es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email').custom( emailPacienteExiste ),
    check('edad','El campo edad no es correcto').isInt(),
    check('edad', 'La edad es obligatoria').not().isEmpty(),
    check('edad').custom(edadCorrecta),
    check('telf', 'El teléfono debe ser numérico').isInt(),
    check('telf', 'El teléfono es obligatorio').not().isEmpty(),
    check('seguro', 'El seguro debe ser numérico').isInt(),
    check('seguro', 'El número de seguro es obligatorio').not().isEmpty(),
    validarCampos
 ]
,controlador.createPaciente);

router.get('/listado', controlador.listadoPacientes); //listado de todos los pacientes

router.get('/listar/:dni', controlador.conseguirPaciente); //mostrar datos de un paciente por su dni

router.delete('/borrar/:dni', controlador.borrarPaciente); //borrar datos de un paciente por su dni

router.put('/modificar/:dni', controlador.modificarPaciente); //modificar datos de un paciente por su dni

router.post('/generar/:cant', controlador.generarPacientes); // generar pacientes, especificando la cantidad


module.exports = router;