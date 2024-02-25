import { CommentModel } from "../database/models/comment.model";
import { CommentCreation } from "../types/comment.t";

export const CreateComment = async (comment: CommentCreation) => {
    try {
     const newComment = await CommentModel.create(comment)
     return newComment
    } catch (error) {
     throw error;
    }
    
 }
