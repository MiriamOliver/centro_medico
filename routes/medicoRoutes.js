const {Router } = require('express');
const router = Router();
const controlador = require('../controllers/medicoController')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { edadCorrecta, emailMedicoExiste, existeMedicoDni } = require('../helpers/db-validators');

router.post('/registro', 
[
    check('dni').custom( existeMedicoDni ),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( emailMedicoExiste ),
    check('edad','El campo edad no es correcto').isInt(),
    check('edad','Valores de edad no correctos').custom(edadCorrecta),
    check('telf', 'El teléfono debe ser numérico').isInt(),
    check('especialidad', 'No es un rol válido').isIn(['Medicina general','Rodillología','Ojología','Golpenloslomoslogia','Tontología','Gargantología']),
    validarCampos
 ]
,controlador.createMedico);

module.exports = router;