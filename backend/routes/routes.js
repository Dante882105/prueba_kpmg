'use strict';

import express from 'express';
import { validarToken } from '../functions/functions.js';

//Controlador para gestionar según la ruta
import controller from '../controllador/controller.js';

//Construcción del objeto de consulta de rutas
const routes = express.Router();

//rutas establecidas
routes.get('', controller.home);
//ruta validada por jwt
routes.get('/products', validarToken, controller.products)


export default routes