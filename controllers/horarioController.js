const {response,request} = require('express');
const conx = require('../controllers/conexion/horarioConexion');
const conexionMedicos = require('./conexion/medicoConexion');


const generarHorario = async (req = request, res = response) => {
    const listaMedicos = await conexionMedicos.listaMedicos();
    const cont = 0;
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado','domingo'];
    const turnos = ['mañana', 'tarde'];
    const especialidades = ['Medicina general', 'Rodillología', 'Ojología', 'Golpenloslomoslogía', 'Tontología', 'Gargantología'];
    const horario = [];

    try{
        dias.forEach(dia => {
            turnos.forEach(turno => {
                let consulta = [];
                especialidades.forEach(especialidad => {
                    let medico = listaMedicos.find(medico => medico.especialidad == especialidad); 
                    consulta.push({dniMedico : medico.dni});               
                })

                cont = cont + 1

                horario.push({
                    id : cont,
                    dia: dia,
                    turno : turno,
                    consulta : consulta
                })
            });
        });

        const cuadrante = conx.crearHorario(horario);

        res.status(200).json(cuadrante);

    } catch (err) {

        res.status(202).json({ 'msg': 'Error generar horario' });
    }

}

const mostrarHorario = async (req = request, res = response) => {

    try {

        const horario = await conx.conseguirHorario();

        res.status(200).json(horario);
    
    } catch (err) {

        res.status(202).json({ 'msg': 'Error al mostrar el horario' });

    }

}


module.exports = {
    generarHorario,
    mostrarHorario
}