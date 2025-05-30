import Router from 'express';
import {renderHome,autenticacion} from '../controllers/home.controller.js';

const router = Router();

router.get('/',renderHome);
router.post('/',autenticacion);

export default router;