import { Router } from 'express';
import * as newsController from '../controllers/news.controller'
import { authAdminMiddleware } from '../middlewares/authAdmin.middleware';
const router = Router();

router.post('/', authAdminMiddleware, newsController.CreateActuality);
router.get('/', newsController.GetAllNews);
router.get('/filter', newsController.GetNewsWithFilters);
router.get('/:id', newsController.GetActualityById);
router.put('/actuality/title/:id', authAdminMiddleware, newsController.UpdateTitleActuality);
router.put('/actuality/description/:id', authAdminMiddleware, newsController.UpdateDescriptionActuality);
router.delete('/actuality/delete', authAdminMiddleware, newsController.DeleteActualityById);

export default router;