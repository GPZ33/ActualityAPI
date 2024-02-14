import { Router } from 'express';
import newsRoutes from './news.route'

const router = Router();

router.use('/v1/news', newsRoutes)

export default router;