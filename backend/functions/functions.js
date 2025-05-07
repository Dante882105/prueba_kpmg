'use strict';

import mysql from 'mysql2/promise';
import { USER, PASS, SECRET } from '../const/const.js';
import jwt from 'jsonwebtoken';

//conexión a base de datos
export const conectar_DB = async ()=>{
    let db = await mysql.createConnection({
        host: 'localhost',
        user: USER,
        password: PASS,
        database: 'node_angular'
    });
    return db;
};

//Creación de un token
export const token = async function(){
    const payload = { user: 'admin', id: 123456}
    let token = jwt.sign(payload, SECRET, {expiresIn : '1h'});
    console.log(token);
    return token;
};

//Validación del token
export const validarToken = function(req, res, next){
    let token = req.headers.authorization;
    let validation = jwt.verify(token, SECRET);
//Si no se obtiene un token
    if(!token) return {success: false, message: 'no existe el token'};
//Si la vaidación da como resultado false
    if(!validation) res.status(401).send({success: false, message: 'El token no es valido'});

    next();
};