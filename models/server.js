const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.medicoPath = '/medicos';
        this.pacientePath = '/pacientes';

        //DataBase
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
        
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());    
    }

    routes(){
        this.app.use(this.medicoPath , require('../routes/medicoRoutes'));
        this.app.use(this.pacientePath , require('../routes/pacienteRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;