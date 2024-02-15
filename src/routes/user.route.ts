import { Router } from 'express';
import * as userController from '../controllers/user.controller'
const router = Router();

router.post('/', userController.createUser);
router.get('/',userController.getUserByEmail)

export default router;