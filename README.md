# centro_medico

## Rutas ( pasos )

### 2 - Información

Dias

    Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo  

Turno

    Mañana, Tarde

Datos para registrar médicos:

    dni, nombre, email, edad, telf, especialidad 

    (Medicina general, Rodillología, Ojología, Golpenloslomoslogía, Tontología, Gargantología)

Datos para registrar pacientes:

    dni, nombre, email, edad, telf, seguro

Datos para registrar o cancelar citas:

    dniMedico, dia, turno


### 1 - Pasos

Generar el horario

    ../horarios/generar
    
Registrar o generar Médicos

    ../medicos/generar
    ../medicos/registrar

Registrar o generar Pacientes

    ../pacientes/generar
    ../pacientes/registrar
    

### 2 - Paso

Crear citas

    ../horarios/cita/pedir/:dni     ->     en el dni se pone el dni del paciente


### 3 - Paso

Rutas horario

    ../horarios/mostrar
    ../horarios/cita/cancelar/:dni              ->     en el dni se pone el dni del paciente
    ../horarios/citas/paciente/:dni             ->     en el dni se pone el dni del paciente
    ../horarios/citas/paciente/:dia/:dni        ->     se pone el dia (ejem : Lunes) y el dni del paciente
    ../horarios/citas/medico/:dia/:turno/:dni   ->     se pone el dia (ejem : Lunes), el turno ( ejem :
                                                       Tarde ) y el dni del paciente
Rutas medicos

    ../medicos/listado
    ../medicos/listar/:dni                      ->     en el dni se pone el dni del medico
    ../medicos/borrar/:dni
    ../medicos/modificar/:dni

Rutas pacientes

    ../pacientes/listado
    ../pacientes/listar/:dni                      ->     en el dni se pone el dni del paciente
    ../pacientes/borrar/:dni
    ../pacientes/modificar/:dni
