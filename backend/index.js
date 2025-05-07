'use strict'
//Importar constantes
import { PORT } from "./const/const.js";

//Importar servidor app
import app from "./servidor/app.js";

//Lanzamiento del servicio
app.listen(PORT,()=>{
    console.log("Se conectó correctamente, http://loscalhost/"+PORT);
});