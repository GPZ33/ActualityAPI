import { Request, Response, NextFunction } from 'express';
import * as jwtUtils from '../utils/jwt.utils';

export const authMiddleware = (req: any, res: any, next: NextFunction) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    if (!token) return res.status(400).send('No token provided');

    const decodedToken = jwtUtils.decodeAccessToken(token);
    if (!decodedToken) return res.status(401).send('Invalid token');

    req.user = decodedToken;
    next();    
  } catch (error) {
    req.status(500).send('Error authenticating');
  }
}