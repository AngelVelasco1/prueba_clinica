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
        action, (err, result) => {
            if (err) {
                console.error('Error de conexion:', err.message);
                res.status(200);
            } else {
                res.send(JSON.stringify(result));
            }
        })
})


storageUsuario.get('/:usu_id', proxyUsuario, (req, res) => {
    const pacienteId = req.params.usu_id;
    const action = `
    SELECT c.* FROM cita c
    WHERE c.cit_datosUsuario = ${pacienteId} AND c.cit_estadoCita AND c.cit_fecha >= CURDATE()
    ORDER BY c.cit_fecha
    `;
    conx.query(
        action, (err, result) => {
            if (err) {
                console.error('Error de conexion:', err.message);
                res.status(200);
            } else {
                res.send(JSON.stringify(result));
            }
        })
})


storageUsuario.get('/:med_nroMatriculaProsional', proxyUsuario, (req, res) => {
    const medicoId = req.params.med_nroMatriculaProsional;

    const action = `SELECT u.* FROM usuario u
    INNER JOIN cita c ON u.usu_id = c.cit_datosUsuario
    WHERE c.cit_medico = ${medicoId}
    ORDER BY c.cit_fecha`;
    conx.query(
        action, (err, result) => {
            if (err) {
                console.error('Error de conexion:', err.message);
                res.status(200);
            } else {
                res.send(JSON.stringify(result));
            }
        })
})

export default storageUsuario;