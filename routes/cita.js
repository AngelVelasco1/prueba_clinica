//? Dependencies
import dotenv from 'dotenv';
import { Router } from 'express';
import proxyCita from '../middleware/proxyCita.js';
import { conx } from '../middleware/proxyCita.js';
//? Enviroment Variables
dotenv.config("../");

const storageCita = Router();

storageCita.get('/', proxyCita, (req, res) => {
    const action = 'SELECT * FROM cita ORDER BY cit_fecha ASC';
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

storageCita.get('/:cit_fecha', proxyCita, (req, res) => {
    const citaFecha = req.params.cit_fecha;
    const action = `SELECT * FROM cita WHERE cit_fecha = ${citaFecha}`;
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

storageCita.get('/:usu_genero', proxyCita, (req, res) => {
    const generoUsuario = req.params.usu_genero;
    const action = `SELECT c.* FROM cita c 
                    INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id
                    INNER JOIN estado_cita ec ON c.cit_estadoCita = ec.estcita_id
                     WHERE u.usu_genero = ${generoUsuario} AND ec.estcita_id = 2`;
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


export default storageCita;