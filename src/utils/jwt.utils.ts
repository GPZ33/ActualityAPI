import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs/jwt.configs";
import bcrypt from 'bcrypt'

export const generateAccessToken = (user: any) => {
  return jwt.sign(user, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

export const generateRefreshToken = async (user: any) => {
  return jwt.sign(user, jwtConfig.refreshSecret, { expiresIn: jwtConfig.refreshExpiresIn });
};

export const decodeAccessToken = (token: any) => {
  try {
    const decodedToken = jwt.verify(token, jwtConfig.secret);
    return decodedToken;
  } catch (error) {
    return null;
  }
};

export const decodeRefreshToken = (token: any) => {  
  try {
    const decodedToken = jwt.verify(token, jwtConfig.refreshSecret);
    return decodedToken;
  } catch (error) {
    return null;
  }
}

export const hashPassword = (password: any) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword
}

export const comparePassword = (password: any, hashedPassword: any) => {
  const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword);
  return isPasswordCorrect
}