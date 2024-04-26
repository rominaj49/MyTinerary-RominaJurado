import express from 'express'
import passport from '../middleware/passport'
import  userController  from '../controllers/User'


const userRouter = express.Router()

const aux = (message:string) => (_req: any, res: any) => {res.send(message)}

userRouter.put( '/update', passport.authenticate( 'jwt', {session: false} ), userController.update)
userRouter.put('/update/password', aux('Update password'))
userRouter.put( '/wishlist/:id', passport.authenticate( 'jwt', {session: false} ), userController.whishList )


export default userRouter