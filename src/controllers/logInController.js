import UserModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';
import {SECRET_JWT} from '../config/config.js';


export const logIn = async(req,res)=>{
    try {
        //extract parameters from request
        const {email,password} = req.body;
          //search user in database
        const UserFound = await UserModel.findOne({ email: email })
        if (!UserFound) {
            return res.status(404).json(" !User not found! ");
          }
          //Validar la contraseña
        const passwordValid = await UserFound.comparePassword(password,UserFound.password);
        if (!passwordValid) {
            return res.status(401).json(" !Password incorrect! ");
          }
          //Crear el token
        const token = JWT.sign({ id: UserFound._id }, SECRET_JWT, {
            expiresIn: 86400, //24 hours
          });
            //Send response
        res.status(200).json({ token:token,message:"Acceso correcto" });


    } catch (error) {
        console.log(error);
        res.status(500).json(" !Internal server error :D! ");
        
    }
}