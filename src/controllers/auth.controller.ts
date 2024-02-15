import * as authService from '../services/auth.service'
import { Request, Response } from 'express';

export const login = async (req : Request, res: Response) => {
    const {email, password} = req.body
    try {
        const loginUser = await authService.login(email, password)
        res.status(201).send(loginUser);
    } catch (error) {
        res.status(500).send("error")
    }
}