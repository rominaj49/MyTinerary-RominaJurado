import { isValidObjectId } from "mongoose"
import { itineraryDTO } from "../models/DTO/Itinerary.dto"
import { Itinerary as ItineraryModel } from "../models/Itinerary"
import { Itinerary, ItineraryDTO } from "../types"
import { ErrorClient } from "../utils/errorClient"
import { itinerariesParis, itinerariesTokyo } from "../utils/data"

export const createItinerary = async (data: Partial<Itinerary>, id:string): Promise<ItineraryDTO> => {
   try {
    const itinerary = await ItineraryModel.create({...data, city: id})
    return itineraryDTO( itinerary )
   } catch (error) {
     throw new ErrorClient('Fail to create itinerary', 400)
   }
}

export const getItinerariesByCity = async( id:string ):Promise<ItineraryDTO[]> => {
    if(  !isValidObjectId( id ) ) throw new ErrorClient('The provided city ID is not a valid Id.', 400)
    const itineraries = await ItineraryModel.find( { city: id } )
    return itineraries.map( itineraryDTO )
}

export const createParisItineraries = async ( idParis: string ):Promise<ItineraryDTO[]>=>{
    const itinerariesDataWithCity = itinerariesParis.map( itinerary => {
        return {
            ...itinerary,
            city: idParis
        }
    } ) 
    const itineraries = await ItineraryModel.insertMany( itinerariesDataWithCity )
    if( itineraries.length === 0 ) throw new ErrorClient( 'Failed to create itineraries', 404 )
    return itineraries.map( itineraryDTO )
}
export const createTokyoItineraries = async ( idTokio: string ):Promise<ItineraryDTO[]>=>{
    const itinerariesDataWithCity = itinerariesTokyo.map( itinerary => {
        return {
            ...itinerary,
            city: idTokio
        }
    } ) 
    const itineraries = await ItineraryModel.insertMany( itinerariesDataWithCity )
    if( itineraries.length === 0 ) throw new ErrorClient( 'Failed to create itineraries', 404 )
    return itineraries.map( itineraryDTO )
}

export default {
    createItinerary,
    getItinerariesByCity,
    createParisItineraries,
    createTokyoItineraries
}