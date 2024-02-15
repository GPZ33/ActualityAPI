import { Router } from 'express';
import newsRoutes from './news.route';
import userRoutes from './user.route';
import authRoutes from './auth.route'
const router = Router();

router.use('/v1/news', newsRoutes)
router.use('/v1/user', userRoutes)
router.use('/v1/auth', authRoutes)
export default router;