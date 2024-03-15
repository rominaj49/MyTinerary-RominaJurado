export interface City{
    _id: ObjectId,
    name: string,
    country: string,
    description: string,
    image: string,
    currency: string,
    language: string,
    averageRating: number,
    reviews: ObjectId[],
    itineraries: ObjectId[]
}

export interface Review{
    id: string,
    idUser: string,
    review: string,
    date: Date,
    rating: number
}

enum Roles{
    USER = 'user',
    ADMIN = 'admin'
}

export interface User{
    _id: ObjectId,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string,
    country: string,
    description: string,
    image?: string,
    api_key: string,
    registrationMethod: string,
    whishlist: ObjectId[]
}

export interface Itinerary{

}

interface CityDTO {
    _id: string
    name: string
    country: string
    description: string
    image: string
    currency: string
    language: string
    averageRating: number
}

export interface UserDTO{
    _id: ObjectId,
    first_name: string,
    last_name: string,
    email: string,
    role?: Roles,
    country: string,
    description?: string,
    image: string | undefined,
    api_key?: string,
    whishlist: ObjectId[]
    token?:string
}