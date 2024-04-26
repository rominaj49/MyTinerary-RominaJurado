import { Itinerary, ItineraryDTO } from "../../types"



export const itineraryDTO = (itinerary: Itinerary): ItineraryDTO => {
    return {
        _id: itinerary._id,
        title: itinerary.title,
        price : itinerary.price,
        guide: itinerary.guide,
        duration: itinerary.duration,
        hashtags : itinerary.hashtags || [],
        city : itinerary.city,
        guide_image: itinerary.guide_image,
        description: itinerary. description,
        activities : itinerary.activities
    }
}