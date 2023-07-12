//? Dependencies
import mysql from "mysql2";
import express from 'express';
import { plainToClass } from 'class-transformer';
import { Usuario } from '../controller/usuario.js';

const proxyUsuario = express();

let conx;
proxyUsuario.use((req, res, next) => {
    try {   
        let config =  JSON.parse(process.env.MY_CONNECT);
        conx = mysql.createPool(config);

        let data = plainToClass(Usuario, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));

        next();
    } catch (err) {
        console.error('Error de conexion:', err.message);
        res.status(500);
    }
})

export default proxyUsuario;
export {conx};
