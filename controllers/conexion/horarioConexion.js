const mongoose = require("mongoose");
const  horario = require('../../models/horario');

const crearHorario = async (cuadrante) => {

    let result = await horario.insertMany(cuadrante);

    return result;
}

const conseguirHorario = async () => {
    return await horario.find();
}

const registrarCita = async(dni, cita) => {

    let listaCitaPacientes = [];

    let registro = await horario.find({
        dia: cita.dia,
        turno: cita.turno,
        consulta: {$elemMatch: { dniMedico: cita.dniMedico }}
    });

    registro.forEach(cite => {
        cite.consulta.forEach(c =>{
            if(c.dniMedico == cita.dniMedico){
                listaCitaPacientes = c.dniPacientes
                listaCitaPacientes.push(dni);
                if(listaCitaPacientes.length < 10){
                    c.dniPacientes = listaCitaPacientes;
                }
            }
        })
    })

    result = await horario.updateOne({id:registro[0].id}, 
    {
        id:registro[0].id,
        dia:registro[0].dia,
        turno:registro[0].turno,
        consulta:registro[0].consulta
    });

   return result;
}

const eliminarCita = async(dni, cita) => {

    let listaCitaPacientes = [];

    let registro = await horario.find({
        dia: cita.dia,
        turno: cita.turno,
        consulta: {$elemMatch: { dniMedico: cita.dniMedico }}
    });

    registro.forEach(cite => {
        cite.consulta.forEach(c =>{
            if(c.dniMedico == cita.dniMedico){
                c.dniPacientes.forEach(p => {
                    if(p != dni){
                        listaCitaPacientes.push(p);
                    }
                })
                c.dniPacientes = listaCitaPacientes;
            }
        })
    })

    result = await horario.updateOne({id:registro[0].id}, 
    {
        id:registro[0].id,
        dia:registro[0].dia,
        turno:registro[0].turno,
        consulta:registro[0].consulta
    });

   return result;
   
}

module.exports = {
    crearHorario,
    conseguirHorario,
    registrarCita,
    eliminarCita
}