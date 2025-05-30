import { getAllSpareParts, getSparePartById, addSparePart, updateSparePart, deleteSparePart } from '../services/spareParts.service.js';
import 'jest-extended';

const sparePart = {
  id: 125,
  name: 'Repuesto de prueba',
  description: 'Descripcion de prueba',
  price: 1500,
  quantity: 2
}

describe('Spare parts service', () => {
  test('getAllSpareParts', async () => {
    const spareParts = await getAllSpareParts();
    expect(spareParts).toBeDefined();
    expect(Array.isArray(spareParts)).toBe(true);
    expect(spareParts.length).toBeGreaterThan(0);
  });

  test('getSparePartById', async () => {
    const sparePart = await getSparePartById(2);
    expect(sparePart).toBeDefined();
    expect(sparePart.id).toBe(2);
    expect(sparePart.name).toBe('Parte del disco duro');
    expect(sparePart.description).toBe('Parte del disco duro de la computadora');
    expect(sparePart.price).toBe(50);
    expect(sparePart.quantity).toBe(1);
  });

  test('addSparePart', async () => {
    await addSparePart(sparePart);
    const newSparePart = await getSparePartById(sparePart.id);
    expect(newSparePart).toBeDefined();
    expect(newSparePart.id).toBe(sparePart.id);
    expect(newSparePart.name).toBe(sparePart.name);
    expect(newSparePart.description).toBe(sparePart.description);
    expect(newSparePart.price).toBe(sparePart.price);
  });
  

  test('updateSparePart', async () => {
    await updateSparePart(sparePart.id, sparePart);
    const updatedSparePart = await getSparePartById(sparePart.id);
    expect(updatedSparePart).toBeDefined();
    expect(updatedSparePart.id).toBe(sparePart.id);
    expect(updatedSparePart.name).toBe(sparePart.name);
    expect(updatedSparePart.description).toBe(sparePart.description);
    expect(updatedSparePart.price).toBe(sparePart.price);
  });

  test('deleteSparePart', async () => {
    await deleteSparePart(sparePart.id);
    await expect(getSparePartById(sparePart.id)).rejects.toThrow('Repuesto no encontrado')
  });
});