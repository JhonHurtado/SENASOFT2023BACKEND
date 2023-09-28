import jwt from 'jsonwebtoken';
import {SECRET_JWT} from '../config/config.js';

export const logOutController = (req, res) => {
    try {
        const token = req.headers["access-token"];
        if(!token){
            res.status(400).json({ message: "please enter the token" });
        }
        const decoded = jwt.verify(token, SECRET_JWT);
        if(!decoded){
            res.status(400).json({ message: "invalid token" });
        }
        jwt.revoke(token)
        res.status(200).json({ message: "logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "unable to log out", error });
    }
}