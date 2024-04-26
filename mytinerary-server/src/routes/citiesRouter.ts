import express from 'express'
import citiesController from '../controllers/City'
import validator from '../middleware/validator/validator'
import citySchema from '../middleware/validator/citySchema'
import cityUpdateSchema from '../middleware/validator/cityUpdateSchema'
const citiesRouter = express.Router()

citiesRouter.get( '/', citiesController.getAllCities)
citiesRouter.get( '/:id', citiesController.getOneCity)
citiesRouter.post( '/', validator(citySchema), citiesController.createCity)
citiesRouter.post( '/all', citiesController.createAllCities)
citiesRouter.put( '/:id', validator(cityUpdateSchema), citiesController.updateCity)

export default citiesRouter