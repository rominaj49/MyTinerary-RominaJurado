import express from 'express'
import validator from '../middleware/validator/validator'
import registerSchema from '../middleware/validator/registerSchema'
import loginSchema from '../middleware/validator/loginSchema'
import { register, login, loginWithToken } from '../controllers/Auth'
import passport from '../middleware/passport'

const authRouter = express.Router()

const aux = (message:string) => (_req: any, res: any) => {res.send(message)}

authRouter.post( '/login', validator( loginSchema ),login)
authRouter.post( '/token',passport.authenticate( 'jwt', {session: false} ), loginWithToken)
authRouter.post( '/register', validator(registerSchema), register)
authRouter.post( '/register/google', aux('Register google'))


export default authRouter