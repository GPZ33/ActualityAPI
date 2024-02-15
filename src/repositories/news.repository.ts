import { ActualityModel } from "../database/models/actuality.model";
import { ActualityCreation } from "../types/actuality.t";

export const CreateActuality = async (actuality : ActualityCreation) => {
    try {
     const newActuality = await ActualityModel.create(actuality)
     return newActuality
    } catch (error) {
     console.log(error)
     throw error;
    }
    
 }

 export const GetAllNews = async () => {
    try {
        const allNews = await ActualityModel.find({})
        return allNews;
    } catch (error) {
        throw error
    }
}

export const GetActualityById = async (id: string) => {
    try {
        const actualityById = await ActualityModel.findById(id).exec()
        return actualityById;
    } catch (error) {
        throw error
    }
}

export const UpdateTitleActuality = async (id: string, title: string) => {
    try {
        const updateTitle = await ActualityModel.findByIdAndUpdate(id, {title})
        return updateTitle;
    } catch (error) {
        throw error
    }
}

export const UpdateDescriptionActuality = async (id: string, description: string) => {
    try {
        const updateDescription = await ActualityModel.findByIdAndUpdate(id, {description})
        return updateDescription;
    } catch (error) {
        throw error
    }
}

export const DeleteActualityById = async (title: string) => {
    try {
        const deleteById = await ActualityModel.deleteOne({title: title})
        return deleteById;
    } catch (error) {
        throw error;
    }
}

export const GetNewsWithFilters = async (filters: any) => {
    try {
        const newsWithFilters = await ActualityModel.find(filters);
        return newsWithFilters;
    } catch (error) {
        throw error;
    }
}
