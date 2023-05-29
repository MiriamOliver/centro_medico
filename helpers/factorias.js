const { faker } = require('@faker-js/faker');

const factoriaMedico = (especialidad) => {

    const letra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    const numero = Math.floor(10000000 + Math.random() * 90000000);
    const dniLetra = letra[numero % 23];

    return {
        dni : numero.toString() + dniLetra,
        nombre : faker.internet.userName(),
        email : faker.internet.email(),
        edad : Math.floor(20 + Math.random() * 50),
        telf : Math.floor(100000000 + Math.random() * 900000000),
        especialidad : especialidad
    }

}

module.exports = {
    factoriaMedico
}