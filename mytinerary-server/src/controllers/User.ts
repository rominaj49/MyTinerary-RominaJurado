import { Request, Response } from "express";
import { HttpResponse } from "../middleware/handleResponse";
import userServices from '../services/User'
import { User } from "../types";
import { catchedAsync } from "../utils/catchedAsync";
import { userDTO } from "../models/DTO/User.dto";
const whishList = async (req: Request, res: Response): Promise<void> => {
    const user = req.user as User
    const update = await userServices.wishList( user.email,  req.params.id )
    HttpResponse.Update( res, update, 'Updated' )
};

const update = async (req: Request, res: Response): Promise<void> => {
    const user = req.user as User
    const update = await userServices.update(  user.email, req.body )
    const userResponse = userDTO( update )
    HttpResponse.Update( res, userResponse, 'Updated' )
}

export default {
    whishList: catchedAsync( whishList ),
    update: catchedAsync( update)
}