import {Router} from 'express';
import {createResource,deleteResource,getResource,getResources,updateResource} from '../controllers/resourcesController.js';

const router = Router();

router.get('/', getResources)
router.get('/:id', getResource)
router.post('/', createResource)
router.put('/:id',updateResource )
router.delete('/:id', deleteResource)

export default router;