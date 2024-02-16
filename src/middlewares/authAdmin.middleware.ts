import { Request, Response, NextFunction } from 'express';
import * as jwtUtils from '../utils/jwt.utils';

export const authAdminMiddleware = (req: any, res: any, next: NextFunction) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    if (!token) return res.status(400).send('No token provided');

    const decodedToken = jwtUtils.decodeAccessToken(token);
    if (!decodedToken) return res.status(401).send('Invalid token');

    req.user = decodedToken;

    // Vérifier si l'utilisateur est un administrateur
    if (req.user.isAdmin == true) {
      next(); // Autoriser l'accès si l'utilisateur est un administrateur
    } else {
      res.status(403).send('Access forbidden. Admin rights required.');
    }
  } catch (error) {
    res.status(500).send('Error authenticating');
  }
};
