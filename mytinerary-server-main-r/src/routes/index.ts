import express from 'express'
import citiesRouter from './citiesRouter'
import itinerariesRouter from './itinerariesRouter'
import authRouter from './authRouter'
import userRouter from './userRouter'

const indexRouter = express.Router()

indexRouter.get('/', (_, res) => {
    res.send( 'Api MyTinerary' )
})

indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/users', userRouter)

export default indexRouter
