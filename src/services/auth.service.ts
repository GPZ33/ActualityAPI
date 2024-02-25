import * as userService from '../services/user.service'
import * as jwtUtils from '../utils/jwt.utils';

export const login = async (email: string, password: string) => {
    try {
        const user = await userService.getUserByEmail(email)
        if (!user) throw new Error('User not found')

        const isPasswordCorrect = jwtUtils.comparePassword(password, user.password);
        if (!isPasswordCorrect) throw new Error('password not correct')

        const accessToken = await jwtUtils.generateAccessToken({email: user.email, isAdmin: user.isAdmin})
        const refreshToken = await jwtUtils.generateRefreshToken({email: user.email, isAdmin: user.isAdmin})

        return {accessToken, refreshToken};
    } catch (error) {
        throw error
    }
}

export const refreshToken = async (refreshToken: any) => {
    try {
        const payload = jwtUtils.decodeRefreshToken (refreshToken) as any;
        if (!payload) throw new Error ("Invalid refresh token");
        const user: any = await userService.getUserByEmail(payload.email)
        if (!user) throw new Error ("User not found");
        const accessToken = await jwtUtils.generateAccessToken({email: user.email, isAdmin: user.isAdmin})
        const newRefreshToken = await jwtUtils.generateRefreshToken({email: user.email, isAdmin: user.isAdmin})

        return {accessToken, refreshToken: newRefreshToken};
    } catch (error) {
        throw error; 
    }
}