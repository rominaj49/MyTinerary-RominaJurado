import { City, CityDTO } from "../../types"



export const cityDTO = (city: City): CityDTO => {
    return {
        _id: city._id,
        name: city.name,
        country: city.country,
        description: city.description,
        image: city.image,
        currency: city.currency,
        language: city.language,
        averageRating: city.averageRating
    }
}