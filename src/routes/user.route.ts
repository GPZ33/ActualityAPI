import { Router } from 'express';
import * as userController from '../controllers/user.controller'
import { authAdminMiddleware } from '../middlewares/authAdmin.middleware';
const router = Router();

router.post('/', authAdminMiddleware, userController.createUser);
router.get('/',userController.findUserByEmail)

export default router;