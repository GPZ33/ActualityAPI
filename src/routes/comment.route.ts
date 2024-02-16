import { Router } from 'express';
import * as commentController from '../controllers/comment.controller'
import { authMiddleware} from '../middlewares/auth.middleware';
const router = Router();

router.post('/', authMiddleware, commentController.CreateComment);

export default router;
