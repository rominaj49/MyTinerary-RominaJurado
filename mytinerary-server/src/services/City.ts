import { isValidObjectId } from "mongoose";
import { City as CityModel } from "../models/City";
import { cityDTO } from "../models/DTO/City.dto";
import { City, CityDTO } from "../types";
import { citiesData } from "../utils/data";
import { ErrorClient } from "../utils/errorClient";
export const createCity = async (data: Partial<City>): Promise<City> => {
    const city = await CityModel.create(data)
    return city
}

export const getAllCities = async (): Promise<CityDTO[]> => {
    const cities = await CityModel.find()
    if( cities.length === 0 ) throw new ErrorClient( 'No cities found', 404 )
    return cities.map( cityDTO )
}

export const getOneCity = async( id: string ):Promise<CityDTO>=>{
    if(  !isValidObjectId( id ) ) throw new ErrorClient('The provided city ID is not a valid Id.', 400)
    const city = await CityModel.findById( id ).populate( {path: 'itineraries', select: '-__v -likes -reviews -city'} )
    if( !city ) throw new ErrorClient( 'Not city found', 404 )
    return cityDTO(city)
}

export const createAllCities = async ( ):Promise<CityDTO[]>=>{
    const cities = await CityModel.insertMany( citiesData )
    if( cities.length === 0 ) throw new ErrorClient( 'Failed to create cities', 404 )
    return cities.map( cityDTO )
}

export const updateCity = async( id: string, data: Object ):Promise<CityDTO>=>{
    const city = await CityModel.findByIdAndUpdate( id, data, { new: true } )
    if( !city ) throw new ErrorClient( 'Invalid ID', 404 )
    return cityDTO(city)
}

export default {
    createCity: createCity,
    getAllCities: getAllCities,
    getOneCity: getOneCity,
    createAllCities: createAllCities,
    updateCity: updateCity
}