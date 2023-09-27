import {Router} from 'express';
import {createTypeLearn,deleteTypeLearn,getTypeLearn,getTypeLearns,updateTypeLearn} from '../controllers/typeLearnController.js';

const router = Router();

router.get('/', getTypeLearns)
router.get('/:id', getTypeLearn)
router.post('/', createTypeLearn)
router.put('/:id', updateTypeLearn)
router.delete('/:id', deleteTypeLearn)

export default router;