import { UserModel } from "../database/models/user.model";

export const CreateUser = async (user: any) => {
    try {
     const newUser = await UserModel.create(user)
     return newUser
    } catch (error) {
     throw error;
    }
    
 }
export const findUserByEmail = async ({email}: any) => {
    try {
        const user = await UserModel.findOne({email})
        return user;
    } catch (error) {
        throw error
    }
 }

 export const GetUserByEmail = async (email: any) => {
    try {
        const user = await UserModel.findOne({email})
        return user;
    } catch (error) {
        throw error
    }
 }