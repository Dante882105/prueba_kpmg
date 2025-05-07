'use strict';
import { token, validarToken } from "../functions/functions.js";

let controller = {
    //Obtener token al ingresar a esta ruta
    home: async function(req,res){
        const TOKEN = await token();
        return res.status(200).send({message: "Conectado desde el front", TOKEN});
    },
    //Obtener la lista de productos de la base de datos
    products: async function(req, res){
        
    },

};

export default controller