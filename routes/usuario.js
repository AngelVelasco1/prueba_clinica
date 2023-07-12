//? Dependencies
import dotenv from 'dotenv';
import { Router } from 'express';
import proxyUsuario from '../middleware/proxyUsuario.js';
import { conx } from '../middleware/proxyUsuario.js';
//? Enviroment variables
dotenv.config("../");

const storageUsuario = Router();


storageUsuario.get('/', proxyUsuario, (req, res) => {
    const action = 'SELECT * FROM usuario ORDER BY usu_nombre ASC';
    conx.query(
        action, (err, result)  => {
            if (err) {
                console.error('Error de conexion:', err.message);
                res.status(200);
            } else {
                res.send(JSON.stringify(result));
            }
        })
})

export default storageUsuario;