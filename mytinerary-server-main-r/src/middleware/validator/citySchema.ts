import joi from 'joi'

const citySchema = joi.object({
    name: joi.string().min(3).max(20).trim().required().messages( {
        'string.min': 'The name must have at least 3 characters',
        'string.max': 'The name must have at most 20 characters',
    } ),
    country: joi.string().min(3).max(20).trim().required().messages({
        'string.min': 'The country must have at least 3 characters',
        'string.max': 'The country must have at most 20 characters',
    }),
    description: joi.string().min(30).max(500).trim().required().messages({
        'string.min': 'The description must have at least 30 characters',
        'string.max': 'The description must have at most 500 characters',
    }),
    image: joi.string().uri().required().messages({
        'string.uri': 'The image must be a valid url'
    }),
    currency: joi.string().min(3).max(15).required().messages({
        'string.min': 'The currency must have at least 3 characters',
        'string.max': 'The currency must have at most 15 characters',
    }),
    language: joi.string().min(3).max(15).trim().required().messages({
        'string.min': 'The language must have at least 3 characters',
        'string.max': 'The language must have at most 15 characters',
    }),
    averageRating: joi.number().min(1).max(5).messages({
        'number.min': 'The average rating must be at least 1',
        'number.max': 'The average rating must be at most 5',
    })
})

export default citySchema