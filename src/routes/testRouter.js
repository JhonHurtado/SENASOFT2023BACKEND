import {Router} from 'express';
import {createTest,deleteTest,getTest,getTests,updateTest} from '../controllers/testController.js';

const router = Router();

router.get('/', getTests)
router.get('/:id', getTest)
router.post('/', createTest)
router.put('/:id', updateTest)
router.delete('/:id',deleteTest )

export default router;