import { HttpError } from "../errors/HttpError.js"

export const renderHome = (req,res) => {
    try {
        res.render('home');
    } catch (error) {
        throw new HttpError(404,error);
    }
}

export const autenticacion = (req,res) => {
    try {
        const { email, password } = req.body;
        //desarrollar logica de autenticación.
        console.log('intento de login',email,password);
        res.send('login recibido');
    } catch (error) {
        throw new HttpError(404,error);
    }
}