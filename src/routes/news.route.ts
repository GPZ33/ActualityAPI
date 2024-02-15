import { Router } from 'express';
//import * as taskController from '../controller/task.controller'
import * as newsController from '../controllers/news.controller'
const router = Router();

router.post('/', newsController.CreateActuality);
router.get('/', newsController.GetAllNews);
router.get('/filter', newsController.GetNewsWithFilters);
router.get('/:id', newsController.GetActualityById);
router.put('/actuality/title/:id', newsController.UpdateTitleActuality);
router.put('/actuality/description/:id', newsController.UpdateDescriptionActuality);
router.delete('/actuality/delete', newsController.DeleteActualityById);

export default router;