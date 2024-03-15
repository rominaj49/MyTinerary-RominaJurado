import { Request, Response } from "express";
import { HttpResponse } from "../middleware/handleResponse";
import { catchedAsync } from "../utils/catchedAsync";
import { User } from "../types";
import userServices from "../services/User";
import { ErrorClient } from "../utils/errorClient";
import handleErrors from "../middleware/handleErrors";
import { userDTO } from "../models/DTO/User.dto";

export const register = async (req: Request, res: Response): Promise<void> => {
    const data: Partial<User> = req.body;
    const emailInDB = await userServices.getUserByEmail(data.email);
    if (emailInDB) {
        handleErrors(new ErrorClient("Email is already in use", 409), res);
    } else {
        const newUser = await userServices.createUser(data);
        const token = await userServices.generateToken( newUser.email, "1h" ) 
        const user = userDTO( newUser, token)
        HttpResponse.Created(res, user, "User created");
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const data: Partial<User> = req.body;
    const userInDB = await userServices.getUserByEmail(data.email);
    if (userInDB) {
        const validPassword = await userServices.validatePassword(userInDB.password, data.password);
        const token = await userServices.generateToken( userInDB.email, "1h" ) 
        const user = userDTO( userInDB, token)
        if (validPassword) HttpResponse.Ok(res, user, "Successful login");
        else handleErrors(new ErrorClient("Email or password is incorrect", 401), res);
    } else {
        handleErrors(new ErrorClient("Email or password is incorrect", 401), res);
    }
};

export const loginWithToken = async( req: any, res: Response ) => {
    const user = userDTO( req.user, req.headers.authorization.split(' ')[1] )
    HttpResponse.Ok(res, user, "Successful login");
}

export default {
    register: catchedAsync(register),
    login: catchedAsync(login),
    loginWithToken: catchedAsync(loginWithToken)
};
