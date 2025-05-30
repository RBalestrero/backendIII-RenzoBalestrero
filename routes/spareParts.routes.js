import { Router } from 'express';
import { getAll_spareParts, get_SparePartsById, add_SparePart, update_SparePart, delete_SparePart } from '../controllers/spareParts.controllers.js';

const sparePartsRouter = Router();


sparePartsRouter.get('/', getAll_spareParts);
sparePartsRouter.get('/:id', get_SparePartsById);
sparePartsRouter.put('/:id', update_SparePart);
sparePartsRouter.delete('/:id', delete_SparePart);
sparePartsRouter.post('/', add_SparePart);

export default sparePartsRouter;