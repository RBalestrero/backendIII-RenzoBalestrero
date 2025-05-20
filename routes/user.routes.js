import { Router } from 'express';
import { getSpareParts, getSparePartsById } from '../controllers/user.controllers.js';

const router = Router();

router.get('/', getSpareParts);
router.get('/:id', getSparePartsById);
export default router;