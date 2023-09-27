import {Router} from 'express';
import {logIn} from '../controllers/logInController.js';
import {validateLogIn} from '../validators/login.js';

const router = Router();


router.post('/',validateLogIn,logIn )


export default router;