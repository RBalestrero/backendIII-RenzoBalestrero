import { getAllSpareParts, getSparePartById, addSparePart, updateSparePart, deleteSparePart } from '../services/spareParts.service.js';

export const getAll_spareParts = async (req, res, next) => {
    try {
        const parts = await getAllSpareParts();
        res.json(parts);
    } catch (error) {
        next(error);
    }
};

export const get_SparePartsById = async (req, res, next) => {
    try {
        const part = await getSparePartById(req.params.id);
        res.json(part);
    } catch (error) {
        next(error);
    }
};

export const add_SparePart = async (req, res, next) => {
    try {
        const part = await addSparePart(req.body);
        res.json(part);
    } catch (error) {
        next(error);
    }
};

export const update_SparePart = async (req, res, next) => {
    try {
        const part = await updateSparePart(req.params.id, req.body);
        res.json(part);
    } catch (error) {
        next(error);
    }
};

export const delete_SparePart = async (req, res, next) => {
    try {
        const part = await deleteSparePart(req.params.id);
        res.json(part);
    } catch (error) {
        next(error);
    }
};