import { User, UserDTO } from "../../types"; 

export const userDTO = ( data: User, token="" ) : UserDTO  => {
    return {
        _id: data._id,
        first_name: data.first_name,
        last_name: data.last_name,
        image: data.image,
        email: data.email,
        country: data.country,
        whishlist: data.whishlist,
        token: token
    }
} 