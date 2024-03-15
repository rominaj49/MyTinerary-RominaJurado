import { User as userModel } from "../models/User";
import { User } from "../types";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../types/config";


export const getUserByEmail = async( email:string = "" ) => {
   return await userModel.findOne( { email: email } )
}

export const createUser = async( data: Partial<User> ):Promise<User> => {
    const hashPassword = bcryptjs.hashSync( data.password || "", 10 )
    data.password = hashPassword  
    const newUser = await userModel.create( data )
    return newUser
}

export const validatePassword = async( hashPassword: string, password: string ="" ) => {
    return bcryptjs.compareSync( password, hashPassword )
}

export const generateToken = async( email:string, time:string ) => {
    return jwt.sign( {email: email}, config.api.JWT_SECRET, {expiresIn: time} )
}

export default{
    createUser,
    getUserByEmail,
    validatePassword,
    generateToken
}