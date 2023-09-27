import {Router} from 'express';
import {createAnswer,deleteAnswer,getAnswer,getAnswers,updateAnswer} from '../controllers/answerController.js';

const router = Router();

router.get('/', getAnswers)
router.get('/:id', getAnswer)
router.post('/',createAnswer )
router.put('/:id', updateAnswer)
router.delete('/:id',deleteAnswer )

export default router;