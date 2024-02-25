import * as userRepository from '../repositories/user.repository'
import * as jwtUtils from '../utils/jwt.utils'

export const createUser = async (user: any) => {
    const existingUser = await userRepository.GetUserByEmail(user.email)
        if (existingUser) throw new Error('Email existe déjà')
    
        user.password = jwtUtils.hashPassword(user.password);
    try {
        const newUser = await userRepository.CreateUser(user)
        return newUser;
    } catch (error) {
        throw error;
    }
}

// Fonctionnalité pour trouver un user via son Email (différence avec {email} comparé à l'autre get)
export const findUserByEmail = async ({email}: any) => {
    try {
        const user = await userRepository.findUserByEmail(email);
        return user;
    }
    catch (error) {
        throw error;
    }
} 

// Fonctionnalité pour trouver un user via son Email pour authentification
export const getUserByEmail = async (email: any) => {
    try {
        const user = await userRepository.GetUserByEmail(email);
        return user;
    }
    catch (error) {
        throw error;
    }
}