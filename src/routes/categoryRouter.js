import {Router} from 'express';
import {createCategory,deleteCategory,getCategory,getCategorys,updateCategory} from '../controllers/categoryController.js';

const router = Router();

router.get('/',getCategorys )
router.get('/:id', getCategory)
router.post('/', createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router;