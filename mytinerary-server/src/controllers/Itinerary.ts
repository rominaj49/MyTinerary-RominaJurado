import { Request, Response } from "express"
import { HttpResponse } from "../middleware/handleResponse"
import { catchedAsync } from "../utils/catchedAsync"
import ItineraryServices from '../services/Itinerary'
import CitiesServices from '../services/City'
/* import { isValidObjectId } from "mongoose"
import { ErrorClient } from "../utils/errorClient" */

const createItinerary = async ( req: Request, res: Response ): Promise<void> => {
    /* if(  !isValidObjectId( req.params.city ) ) throw new ErrorClient('The provided city ID is not a valid Id.', 400) */
    const city = await CitiesServices.getOneCity( req.params.city  )
    const itinerary = await ItineraryServices.createItinerary( req.body, city._id )
    await CitiesServices.updateCity( city._id, { $push : { itineraries : itinerary._id } } )
    HttpResponse.Created(res, itinerary)
}

const getItinerariesByCity = async ( req: Request, res: Response ) => {
    const itineraries = await ItineraryServices.getItinerariesByCity( req.params.city )
    HttpResponse.Ok( res, itineraries, 'All itineraries' )
}

const createParisItineraries = async ( _req:Request, res: Response) => {
    const cities = await CitiesServices.getAllCities()
    const paris = cities.find( city => city.name == "Paris" )
    if( paris ){
        const itineraries = await ItineraryServices.createParisItineraries( paris._id )
        const ids = itineraries.map( x => x._id )
        await CitiesServices.updateCity( paris._id, { $push : { itineraries : ids } } )
        HttpResponse.Created( res, "Created" )
    }
}
const createTokyoItineraries = async ( _req:Request, res: Response) => {
    const cities = await CitiesServices.getAllCities()
    const tokyo = cities.find( city => city.name == "Tokyo" )
    if( tokyo ){
        const itineraries = await ItineraryServices.createTokyoItineraries( tokyo._id )
        const ids = itineraries.map( x => x._id )
        await CitiesServices.updateCity( tokyo._id, { $push : { itineraries : ids } } )
        HttpResponse.Created( res, "Created" )
    }
}

export default {
    createItinerary : catchedAsync( createItinerary ),
    getItinerariesByCity : catchedAsync(getItinerariesByCity),
    createParisItineraries : catchedAsync( createParisItineraries ),
    createTokyoItineraries: catchedAsync(createTokyoItineraries)
}