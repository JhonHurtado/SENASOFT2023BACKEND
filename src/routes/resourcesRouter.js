import {Router} from 'express';
import {createResource,deleteResource,getResource,getResources,updateResource} from '../controllers/resourcesController.js';
import {validateResource} from '../validators/resource.js';

const router = Router();

router.get('/', getResources)
router.get('/:id', getResource)
router.post('/', validateResource,createResource)
router.put('/:id',updateResource )
router.delete('/:id', deleteResource)

export default router;