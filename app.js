import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
import sparePartsRouter from './routes/spareParts.routes.js';
import cors from 'cors';
import repuestosOperacionesRouter from './routes/repuestosOperaciones.routes.js';
import {engine} from 'express-handlebars';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import home from './routes/home.routes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname,'public')));

app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 8080;
app.use(express.json());

app.use(cors());

app.use('/',home);
app.use('/spareParts', sparePartsRouter);
app.use('/repuestos/inventario', repuestosOperacionesRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server funcionando en http://localhost:${port}`);
});