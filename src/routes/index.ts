import { Router } from 'express';
import newsRoutes from './news.route';
import userRoutes from './user.route';
const router = Router();

router.use('/v1/news', newsRoutes)
router.use('/v1/user', userRoutes)

export default router;