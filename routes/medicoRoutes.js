const {Router } = require('express');
const router = Router();
const controlador = require('../controllers/medicoController')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { edadCorrecta, emailMedicoExiste, existeMedicoDni } = require('../helpers/db-validators');

router.post('/registro', 
[
    check('dni').custom( existeMedicoDni ),
    check('dni', 'El DNI es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email').custom( emailMedicoExiste ),
    check('edad','El campo edad no es correcto').isInt(),
    check('edad', 'La edad es obligatoria').not().isEmpty(),
    check('edad').custom(edadCorrecta),
    check('telf', 'El teléfono debe ser numérico').isInt(),
    check('telf', 'El teléfono es obligatorio').not().isEmpty(),
    check('especialidad', 'No es una especialidad válida').isIn(['Medicina general','Rodillología','Ojología','Golpenloslomoslogia','Tontología','Gargantología']),
    check('especialidad', 'La especialidad es obligatoria').not().isEmpty(),
    validarCampos
 ],
controlador.createMedico);

router.get('/listado', controlador.listarMedicos);

module.exports = router;