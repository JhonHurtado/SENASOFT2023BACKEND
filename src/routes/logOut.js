import {Router} from 'express';
import logOut from '../controllers/logOutController.js';

const router = Router();

router.post('/',logOut)


export default router;