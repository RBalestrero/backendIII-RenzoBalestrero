import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 80;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('El server esta funcionando, primeros pasos!!!');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server funcionando en http://localhost:${port}`);
});