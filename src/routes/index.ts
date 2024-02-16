import { Router } from 'express';
import newsRoutes from './news.route';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import commentRoutes from './comment.route';
const router = Router();

router.use('/v1/news', newsRoutes)
router.use('/v1/user', userRoutes)
router.use('/v1/auth', authRoutes)
router.use('/v1/comment', commentRoutes)
export default router;