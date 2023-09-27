import {Router} from 'express';
import {createCategory,deleteCategory,getCategory,getCategorys,updateCategory} from '../controllers/categoryController.js';
import validateCategory from '../validators/category.js';

const router = Router();

router.get('/',getCategorys )
router.get('/:id', getCategory)
router.post('/',validateCategory,createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router;