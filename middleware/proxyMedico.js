//? Dependencies
import mysql from "mysql2";
import express from 'express';
import { plainToClass } from 'class-transformer';
import { Medico } from '../controller/medico.js';


const proxyMedico = express();

let conx;
proxyMedico.use((req, res, next) => {
    try {   
        let config =  JSON.parse(process.env.MY_CONNECT);
        conx = mysql.createPool(config);

        let data = plainToClass(Medico, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));

        next();
    } catch (err) {
        console.error('Error de conexion:', err.message);
        res.status(500);
    }
})

export default proxyMedico;
export {conx};