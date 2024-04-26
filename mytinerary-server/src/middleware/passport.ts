import passport from 'passport'
import { Strategy,ExtractJwt, StrategyOptionsWithoutRequest } from 'passport-jwt'
import { getUserByEmail } from '../services/User'
import config from '../types/config'
const options:StrategyOptionsWithoutRequest = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : config.api.JWT_SECRET
}
const fn = async ( jwt_payload:any, done:any ) => {
    try{
        const user = await getUserByEmail( jwt_payload.email )
        if( !user ){
            done( null, false )
        }
        done( null, user )
    }catch(err){
        done( err, false )
    }
}
export default passport.use( new Strategy( options, fn ) )