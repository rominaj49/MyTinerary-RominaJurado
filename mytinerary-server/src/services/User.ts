import { User as userModel } from "../models/User";
import { User } from "../types";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../types/config";
import  mongoose  from "mongoose";
import { ErrorClient } from "../utils/errorClient";


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

export const wishList = async( email:string, idItinerary: string ): Promise<any> =>{
    const user = await getUserByEmail( email )
    if( !user ) throw new ErrorClient( "Any user with this email", 400 )
    if( user?.whishlist.find( id => String(id) == idItinerary ) ){
        user.whishlist = user.whishlist.filter( id => String(id) != idItinerary )
    }else{
        user.whishlist.push( new mongoose.Types.ObjectId( idItinerary ) )
    }
    user.save()
    return user
}

export const update = async( email:string, data: Partial<User> ):Promise<any> => {
    const update = await userModel.findOneAndUpdate( {email: email}, data, {new:true} )
    return update
}

export default{
    createUser,
    getUserByEmail,
    validatePassword,
    generateToken,
    wishList,
    update
}