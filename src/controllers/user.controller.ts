import * as userService from '../services/user.service'
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {

    try {
        const {email, password, isAdmin} = req.body
        const newUser = await userService.createUser({email, password, isAdmin})
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send('error')
    }
}

export const getUserByEmail = async (req: Request, res: Response) => {
    const emailUser = req.query
    console.log(emailUser)
    try {
        const userByEmail = await userService.getUserByEmail(emailUser)
        console.log("user", userByEmail)
        res.status(201).send(userByEmail);
    } catch (error) {
        res.status(500).send('error')
        console.log(error)
    }
}