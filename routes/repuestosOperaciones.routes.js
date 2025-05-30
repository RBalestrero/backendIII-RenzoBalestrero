import Router from 'express';
import {renderizarPagina} from '../controllers/repuestosOperaciones.controller.js'

const router = Router();

router.get('/',renderizarPagina);

export default router;