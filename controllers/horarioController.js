const {response,request} = require('express');
const { uuid } = require('uuidv4');
const conx = require('../controllers/conexion/horarioConexion');
const conexionMedicos = require('./conexion/medicoConexion');


const generarHorario = async (req = request, res = response) => {
    const listaMedicos = await conexionMedicos.listaMedicos();
    const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    const turnos = ['Mañana','Tarde'];
    const especialidades = ['Medicina general', 'Rodillología', 'Ojología', 'Golpenloslomoslogía', 'Tontología', 'Gargantología'];
    const horario = [];

    try{
        dias.forEach(dia => {
            turnos.forEach(turno => {
                let consulta = [];
                especialidades.forEach(especialidad => {
                    let medico = listaMedicos.find(medico => medico.especialidad == especialidad);
                    let dniMedico = medico.dni;
                    consulta.push({dniMedico : dniMedico});               
                })

                horario.push({
                    id : uuid(),
                    dia : dia,
                    turno : turno,
                    consulta : consulta
                })

            });
        });

        const cuadrante = await conx.crearHorario(horario);

        res.status(200).json(cuadrante);

    } catch (err) {

        res.status(202).json({ 'msg': 'Error generar horario', 'err' : err });
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

const crearCita = async(req = request, res = response) => {

    try{
        const cita = await conx.registrarCita(req.params.dni, {
            dniMedico: req.body.dniMedico,
            dia: req.body.dia,
            turno : req.body.turno,
       });
       res.status(201).json(cita);
    }catch(err){
        console.log(err);
        res.status(203).json(err);
    }
}


module.exports = {
    generarHorario,
    mostrarHorario,
    crearCita
}