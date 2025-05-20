import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 80;
app.use(express.json());

app.use('/spareParts', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server funcionando en http://localhost:${port}`);
});