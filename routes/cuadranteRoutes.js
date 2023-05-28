const {Router } = require('express');
const router = Router();
const controlador = require('../controllers/horarioController');


router.get('/generar', controlador.generarHorario);

router.get('/mostrar', controlador.mostrarHorario);


module.exports = router;