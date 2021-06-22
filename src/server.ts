import 'reflect-metadata';
import express from "express";
import { router } from './routes';

import './database';
const app = express();

app.use(express.json())

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Cruar) uma informação
 * PUT    => Alterar informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros 
 * Routes Params => http://localhost:3000/produtos/{123}
 * Query Params  => http://localhost:3000/produtos{?name=teclado&description=mecanico}
 * 
 * Body Params   => {
 * "name": "teclado"
 * "description": "mecanico"
 * }
 */

app.use(router);

app.listen(3000, () => console.log("Server is running in port 3000"));
