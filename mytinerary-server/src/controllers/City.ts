import { Request, Response } from 'express';
import citiesService from '../services/City';
import { HttpResponse } from '../middleware/handleResponse';
import { catchedAsync } from '../utils/catchedAsync';

const getAllCities = async (_req: Request, res: Response): Promise<void> => {
    const cities = await citiesService.getAllCities()
    HttpResponse.Ok(res, cities)
}

const getOneCity = async(req:Request, res:Response): Promise<void>=>{
    const { id } = req.params
    const city = await citiesService.getOneCity(id)
    HttpResponse.Ok(res, city )
}

const createCity = async ( req: Request, res: Response ): Promise<void> => {
    const city = await citiesService.createCity( req.body )
    HttpResponse.Created(res, city)
}

const createAllCities = async ( _req: Request, res: Response ):Promise<void>=>{
    const cities = await citiesService.createAllCities()
    HttpResponse.Ok(res, cities)
}

const updateCity = async ( req: Request, res: Response ): Promise<void> => {
    const { id } = req.params
    const city = await citiesService.updateCity( id, req.body )
    HttpResponse.Ok(res, city)
}

export default { 
    getAllCities: catchedAsync(getAllCities), 
    getOneCity: catchedAsync(getOneCity), 
    createCity: catchedAsync(createCity),
    createAllCities: catchedAsync(createAllCities),
    updateCity: catchedAsync(updateCity)
}