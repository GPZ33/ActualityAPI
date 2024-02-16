import { Request, Response } from 'express';
import { CommentCreation } from '../types/comment.t';
import * as commentService from '../services/comment.service';

export const CreateComment = async (req: Request, res: Response) => {

    const comment: CommentCreation = req.body;
    try {
        const newComment = await commentService.CreateComment(comment);
        res.status(201).send(newComment);
    } catch (error) {
        res.status(500).send('error bordel')
    }
}