import express from 'express'
import indexRouter from './routes'
import config from './types/config'
import cors from 'cors'
import './config/db'
import errorHandlerMiddleware from './middleware/handleErrors'

const app = express()

app.use( cors() )

app.use( express.json() )


app.use( '/api', indexRouter )

app.use( (err:any, _req:any, res:any, _next:any) => {
    errorHandlerMiddleware( err, res) 
})

app.listen( config.api.PORT, () => {
    console.log('Server is running in port ' + config.api.PORT)
} )