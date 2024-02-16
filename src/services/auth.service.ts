import * as userService from '../services/user.service'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { jwtConfig } from '../configs/jwt.configs'

export const login = async (email: string, password: string) => {
    try {
        const user = await userService.getUserByEmail(email)

        if (!user) throw new Error('User not found')

        const isCorrectPassword = await bcrypt.compareSync(password, user.password)

        if (!isCorrectPassword) throw new Error('password not correct')

        // Récupérer le statut d'administrateur de l'utilisateur
        const isAdmin = user.isAdmin || false;

        const accessToken = await jwt.sign({email, isAdmin}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn})
        //const refreshToken = jwt.sign(user, jwtConfig.refreshSecret, { expiresIn: jwtConfig.refreshExpiresIn });
        console.log(accessToken)
        return {accessToken};
    } catch (error) {
        console.log(error)
        throw error
    }
}