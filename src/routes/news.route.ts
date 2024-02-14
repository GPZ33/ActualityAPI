import { Router } from 'express';
//import * as taskController from '../controller/task.controller'
import * as newsController from '../controllers/news.controller'
const router = Router();

router.post('/', newsController.CreateActuality);
router.get('/', newsController.GetAllNews);
router.get('/:id', newsController.GetActualityById);
router.put('/actuality/title/:id', newsController.UpdateTitleActuality);
export default router;