import {Router} from 'express';
import {logOutController} from '../controllers/logOutController.js';

const router = Router();

router.post('/',logOutController)


export default router;