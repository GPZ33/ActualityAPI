import mongoose from "mongoose";


export const CommentSchema = new mongoose.Schema({
    idActuality: {
        type: String,
        required: true
    },
    emailUser: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})