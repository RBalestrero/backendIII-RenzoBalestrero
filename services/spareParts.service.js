import { readJSON, writeJSON } from '../utils/sparePartManager.js';
import { HttpError } from '../errors/HttpError.js';

const spareParts = await readJSON('spareParts.json');

export const getAllSpareParts = async () => spareParts;

export const getSparePartById = async (id) => {
  const part = spareParts.find((part) => part.id == id);
  if (!part) throw new HttpError(404, 'Repuesto no encontrado');
  return part;
};

export const addSparePart = async (sparePart) => {
  if(spareParts.find(part => part.id == sparePart.id))
    throw new HttpError(404, 'El repuesto ya existe');
  spareParts.push(sparePart);
  writeJSON('spareParts.json', spareParts);
};

export const updateSparePart = async (id, sparePart) => {
  const index = spareParts.findIndex((part) => part.id == id);
  if (index === -1) throw new HttpError(404, 'Repuesto no encontrado');
  spareParts[index] = sparePart;
  writeJSON('spareParts.json', spareParts);
};

export const deleteSparePart = async (id) => {
  const index = spareParts.findIndex((part) => part.id == id);
  if (index === -1) throw new HttpError(404, 'Repuesto no encontrado');
  spareParts.splice(index, 1);
  console.log(spareParts);
  writeJSON('spareParts.json', spareParts);
};