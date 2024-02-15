import bcrypt from 'bcrypt'
import * as userRepository from '../repositories/user.repository'

export const createUser = async (user: any) => {
    const salt = bcrypt.genSaltSync(10)    
    const hashedPassword = bcrypt.hashSync(user.password, salt)
    try {
        const existingUser = await userRepository.GetUserByEmail(user.email)
        if (existingUser) throw new Error('Email existe déjà')

        const newUser = await userRepository.CreateUser({email: user.email, password: hashedPassword, statut: user.statut})
        return newUser;
    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async (email: any) => {
    try {
        const user = await userRepository.GetUserByEmail(email);
        return user;
    }
    catch (error) {
        console.log("erreur service", error)
        throw error;
    }
}