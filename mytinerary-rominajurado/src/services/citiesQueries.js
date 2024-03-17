import axios from 'axios'


export const getCities = async() =>{
    try{
    const resp = await axios("http://localhost:4000/api/cities")
    return resp.data.data
    }catch(err){
        return []
    } 
}

export const getCitieById = async(id) =>{
    try{
        const resp = await axios("http://localhost:4000/api/cities/" + id)
        return resp.data.data
    }catch(err){
        return []
    }
}

export const getItinerariesById = async (idCitie) => {
        try {
          const resp = await axios("http://localhost:4000/api/itineraries/city/" + idCitie)
          return resp.data.data;
        } catch (err) {
          return []
        }
}
    
