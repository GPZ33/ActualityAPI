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
}

export const GetAllNews = async (req: Request , res: Response) => {
    try {
        const actuality = await newsService.GetAllNews();
       res.status(201).send(actuality);
    } catch (error) {
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
    const title = req.body.title;
    try {
        const updateTitle = await newsService.UpdateTitleActuality(actualityId, title)
        res.status(201).send(updateTitle);
    } catch (error) {
        res.status(500).send('error bordel')
    }
}

export const UpdateDescriptionActuality = async (req: Request, res: Response) => {
    const actualityId = req.params.id;
    const description = req.body.description;
    try {
        const updateDescription = await newsService.UpdateDescriptionActuality(actualityId, description)
        res.status(201).send(updateDescription);
    } catch (error) {
        res.status(500).send('error bordel')
    }
}

export const DeleteActualityById = async (req: Request, res: Response) => {
    const deleteActuality = req.body.title;
    try {
        const deleteById = await newsService.DeleteActualityById(deleteActuality);
        res.status(201).send(deleteById);
    } catch (error) {
        res.status(500).send('error bordel')
    }
}

export const GetNewsWithFilters = async (req: Request, res: Response) => {
    const { auteur, title, date, keywords } = req.query;
    
    try {
        const filters: any = {};
        if (auteur) {
            // Vérifie si l'auteur est parmi les valeurs autorisées
            if (['Jean', 'Aziz', 'Sarah'].includes(auteur as string)) {
                filters.auteur = auteur;
            } else {
                return res.status(400).json({ error: `${auteur} n'est pas un auteur reconnu.` });
            }
        }

        if (title) filters.title = title;

        if (date) {
            // Vérifie si la date est une date valide
            const parsedDate = new Date(date as string);
            if (!isNaN(parsedDate.getTime())) {
                filters.date = parsedDate;
            } else {
                return res.status(400).json({ error: 'Format de date invalide.' });
            }
        }

        if (keywords) {
            // Recherche des mots-clés dans la description
            filters.description = { $regex: new RegExp(keywords as string, 'i') };
        }

        const filteredNews = await newsService.GetNewsWithFilters(filters);
        res.status(200).json(filteredNews);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des actualités avec filtres.');
    }
};