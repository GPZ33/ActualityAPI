import { ActualityModel } from "../database/models/actuality.model";
import { ActualityCreation, ActualityFinal } from "../types/actuality.t";

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

        if(!actualityById) {
            return null;
        }
        const category = actualityById.genre;
        const randomActuality = await ActualityModel.aggregate([
            {$match: {genre: category, _id: {$ne: actualityById._id }}},
            {$sample: {size: 3}}
        ])
        return {actualityById, suggestions: randomActuality};
    } catch (error) {
        throw error
    }
}

/*export const GetSuggestionsForActuality = async (actualityById: any) => {
    try {
        if(!actualityById) {
            return null;
        }
        const category = actualityById.genre;
        const randomActuality = await ActualityModel.aggregate([
            {$match: {genre: category, _id: {$ne: actualityById.id }}},
            {$sample: {size: 3}}
        ])
    } catch (error) {
        throw error;
    }
}*/
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
