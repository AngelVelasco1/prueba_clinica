//? Dependencies
import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';

//? Routes
import storageUsuario from './routes/usuario.js'

//? Enviroment Variables
dotenv.config();

const app = express();
app.use(express.json());

//? Use routes
app.use("/usuario", storageUsuario);

//? Server
const config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
})