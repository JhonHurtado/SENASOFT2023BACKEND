import {Router} from 'express';
import {createModule,deleteModule,getModule,getModules,updateModule} from '../controllers/modulesController.js';
import {validateModule} from '../validators/module.js';

const router = Router();

router.get('/', getModules)
router.get('/:id',getModule )
router.post('/', validateModule,createModule)
router.put('/:id', updateModule)
router.delete('/:id',deleteModule )

export default router;