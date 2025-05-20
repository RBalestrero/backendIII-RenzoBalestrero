import { HttpError } from '../errors/HttpError.js';

export const getSpareParts = (req, res) => {
  res.json({ message: 'Get all users' });
};

export const getSparePartById = (req, res) => {
  res.json({ message: 'Get user by id' });
};