import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
import sparePartsRouter from './routes/spareParts.routes.js';
import cors from 'cors';

dotenv.config();
const app = express();


app.use(cors());
const port = process.env.PORT || 80;
app.use(express.json());

app.use('/spareParts', sparePartsRouter);
app.use('/', express.static('public'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server funcionando en http://localhost:${port}`);
});