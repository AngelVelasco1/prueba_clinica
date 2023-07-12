//? Dependencies
import mysql from "mysql2";
import express from 'express';
import { plainToClass } from 'class-transformer';
import { Cita } from '../controller/cita.js';


const proxyCita = express();

let conx;
proxyCita.use((req, res, next) => {
    try {   
        let config =  JSON.parse(process.env.MY_CONNECT);
        conx = mysql.createPool(config);

        let data = plainToClass(Cita, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));

        next();
    } catch (err) {
        console.error('Error de conexion:', err.message);
        res.status(500);
    }
})

export default proxyCita;
export {conx};