import { CommentCreation, CommentFinal } from "../types/comment.t"
import * as commentRepository from "../repositories/comment.repository"
import * as userService from '../services/user.service'

export const CreateComment = async (comment: CommentCreation) => {
    const newDate: Date = new Date();
    const newComment: CommentFinal = {...comment, date: newDate};
    
    try {
        
        const comments = await commentRepository.CreateComment(newComment)
        if(!comment) throw new Error ('error creating actuality')

        //const newLog = await logService.CreateLog({ feature: 'task', content: task})
        //console.log(newLog)

        return comments;
    } catch (error) {
        throw error;
    }
}