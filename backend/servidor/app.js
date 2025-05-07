import express from 'express';
import body_parser from 'body-parser';
import routes from '../routes/routes.js';

const app = express();

//middlewares
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

//Gestion de enrutado
app.use('/api', routes);

export default app