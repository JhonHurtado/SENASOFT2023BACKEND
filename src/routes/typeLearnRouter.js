import {Router} from 'express';
import {createTypeLearn,deleteTypeLearn,getTypeLearn,getTypeLearns,updateTypeLearn} from '../controllers/typeLearnController.js';
import validateTypeLearn from '../validators/typeLearn.js';

const router = Router();

router.get('/', getTypeLearns)
router.get('/:id', getTypeLearn)
router.post('/', validateTypeLearn,createTypeLearn)
router.put('/:id', updateTypeLearn)
router.delete('/:id', deleteTypeLearn)

export default router;