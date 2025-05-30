import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const getDataPath = (filename) => path.join(__dirname, '../models', filename);

export const readJSON = async (filename) => {
  const filePath = getDataPath(filename);
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

export const writeJSON = async (filename, data) => {
  const filePath = getDataPath(filename);
  await fs.writeFile(filePath, JSON.stringify(''));
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};