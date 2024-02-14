import { Request, Response } from 'express';
import { ActualityCreation, ActualityFinal } from '../types/actuality.t';
import * as newsService from '../services/news.service'

export const CreateActuality = async (req: Request, res: Response) => {

    const actuality: ActualityCreation = req.body;
    try {
        const newActuality = await newsService.CreateActuality(actuality);
        res.status(201).send(newActuality);
    } catch (error) {
        res.status(500).send('error bordel')
    }
    // res.status(200).send("task created 222 ");
   // console.log(task);

}

export const GetAllNews = async (req: Request , res: Response) => {
    try {
        const actuality = await newsService.GetAllNews();
       res.status(201).send(actuality);
    } catch (error) {
        console.log(error)
        res.status(500).send('error bordel')
    }
}

export const GetActualityById = async (req: Request, res: Response) => {
    const actualityId = req.params.id;
    try {
        const actualityById = await newsService.GetActualityById(actualityId);
        res.status(201).send(actualityById);
    } catch (error) {
        res.status(500).send('error bordel')
    }
}

export const UpdateTitleActuality = async (req: Request, res: Response) => {
    const actualityId = req.params.id;
    const title = req.params.title;
    
    try {
        const updateTitle = await newsService.UpdateTitleActuality(actualityId, title)
        console.log ("controlleur titre", updateTitle)
        res.status(201).send(updateTitle);
    } catch (error) {
        res.status(500).send('error bordel')
        console.log(error);
    }
} 