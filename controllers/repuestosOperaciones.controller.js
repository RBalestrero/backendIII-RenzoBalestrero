import { HttpError } from "../errors/HttpError.js"
export const renderizarPagina = (req,res) => {
        try {
            res.render('sparePartsTable',{title: "Hola mundo"});
        } catch (error) {
            throw new HttpError(404, error);
        }
}