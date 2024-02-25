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

export const refreshToken = async (req : Request, res: Response) => {
    const refreshToken = req.body.refreshToken
    try {
        const refresh = await authService.refreshToken(refreshToken);
        res.status(201).send(refresh);
    }
    catch(error) {
        res.status(500).send("error")
    }
}