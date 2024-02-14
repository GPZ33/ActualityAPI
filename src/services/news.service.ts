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
    const taskById = await actualityRepository.GetActualityById(id) 
    return taskById       
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