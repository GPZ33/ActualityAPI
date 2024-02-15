import mongoose from "mongoose";


export const ActualitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true,
        validate: {
            validator: (content: any) => {
                return ['Jean', 'Aziz', 'Sarah'].includes(content)
            },
            message: (props: { value: string }) => `${props.value} n'est pas un auteur reconnu`
        }
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String
    }
})