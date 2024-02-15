import { ActualityCreation, ActualityFinal } from "../types/actuality.t";
import * as actualityRepository from "../repositories/news.repository"
export const CreateActuality = async (actuality: ActualityCreation) => {
    const newDate: Date = new Date();
    const newActuality: ActualityFinal = {...actuality, date: newDate};
    
    try {
        const actualities = await actualityRepository.CreateActuality(newActuality)
        if(!actuality) throw new Error ('error creating actuality')

        //const newLog = await logService.CreateLog({ feature: 'task', content: task})
        //console.log(newLog)

        return actualities;
    } catch (error) {
        throw error;
    }
}

export const GetAllNews = async () => {
    try {
        const news = await actualityRepository.GetAllNews()
        return news;
    } catch (error) {
        throw error
    }
}

export const GetActualityById = async (id: string) => {
    try {
    const actualitykById = await actualityRepository.GetActualityById(id)
    return actualitykById      
    } catch (error) {
        throw error
    }
}


export const UpdateTitleActuality = async (id: string, title: string) => {
    try {
        const updateTitle = await actualityRepository.UpdateTitleActuality(id, title)
        console.log(updateTitle)
        return updateTitle;
    } catch (error) {
        throw error
    }
}

export const UpdateDescriptionActuality = async (id: string, description: string) => {
    try {
        const updateDescription = await actualityRepository.UpdateDescriptionActuality(id, description)
        console.log(updateDescription)
        return updateDescription;
    } catch (error) {
        throw error
    }
}

export const DeleteActualityById = async (title: string) => {
    try {
        const deleteById = await actualityRepository.DeleteActualityById(title)
        console.log("service",deleteById)
        return deleteById;
    } catch (error) {
        throw error;
    }
}

export const GetNewsWithFilters = async (filters: any) => {
    try {
        const newsWhitFilters = await actualityRepository.GetNewsWithFilters(filters);
        return newsWhitFilters;
    } catch (error) {
        throw error;
    }
}