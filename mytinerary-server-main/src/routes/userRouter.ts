import express from 'express'

const userRouter = express.Router()

const aux = (message:string) => (_req: any, res: any) => {res.send(message)}

userRouter.put( '/update', aux('Update'))
userRouter.put('/update/password', aux('Update password'))


export default userRouter