import {Router} from 'express';
import {createBaseAnswer,deleteBaseAnswer,getBaseAnswer,getBaseAnswers,updateBaseAnswer,} from '../controllers/baseAnswerController.js';


const router = Router();

router.get('/', getBaseAnswers)
router.get('/:id', getBaseAnswer)
router.post('/',createBaseAnswer )
router.put('/:id', updateBaseAnswer)
router.delete('/:id',deleteBaseAnswer )

export default router;