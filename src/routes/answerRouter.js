import {Router} from 'express';
import {createAnswer,deleteAnswer,getAnswer,getAnswers,updateAnswer} from '../controllers/answerController.js';
import {validateAnswers} from '../validators/answers.js';

const router = Router();

router.get('/', getAnswers)
router.get('/:id', getAnswer)
router.post('/',validateAnswers,createAnswer )
router.put('/:id', updateAnswer)
router.delete('/:id',deleteAnswer )

export default router;