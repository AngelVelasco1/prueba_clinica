//? Dependencies
import dotenv from "dotenv";
import { Router } from "express";
import proxyMedico from "../middleware/proxyMedico.js";
import { conx } from "../middleware/proxyMedico.js";
//? Enviroment Variables
dotenv.config("../");

const storageMedico = Router();

storageMedico.get("/especialidad", proxyMedico, (req, res) => {
  const action = `SELECT m.*, e.esp_nombre FROM medico m  
                    INNER JOIN especialidad e ON m.med_especialidad = e.esp_id`;
  conx.query(action, (err, result) => {
    if (err) {
      console.error("Error de conexion:", err.message);
      res.status(200);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

storageMedico.get("/consultorio", proxyMedico, (req, res) => {
  const action = `SELECT m.*, c.cons_nombre
    FROM medico m
    INNER JOIN consultorio c ON m.med_consultorio = c.cons_codigo
`;
  conx.query(action, (err, result) => {
    if (err) {
      console.error("Error de conexión:", err.message);
      res.status(200);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});


export default storageMedico;
