import {Router} from 'express';
import {createUser,deleteUser,getUser,getUsers,updateUser} from '../controllers/userController.js';
import {validateUser} from '../validators/user.js';

const router = Router();

router.get('/', getUsers)
router.get('/:id',getUser )
router.post('/',validateUser, createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;