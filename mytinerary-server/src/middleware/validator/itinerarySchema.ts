import joi from 'joi'

const itinerarySchema = joi.object({
    title: joi.string().min(3).max(20).trim().required().messages( {
        'string.min': 'The title must have at least 3 characters',
        'string.max': 'The title must have at most 20 characters',
    } ),
    guide: joi.string().min(3).max(20).trim().required().messages({
        'string.min': 'The guide must have at least 3 characters',
        'string.max': 'The guide must have at most 20 characters',
    }),
    description: joi.string().min(30).max(500).trim().required().messages({
        'string.min': 'The description must have at least 30 characters',
        'string.max': 'The description must have at most 500 characters',
    }),
    guide_image: joi.string().uri().required().messages({
        'string.uri': 'The guide_image must be a valid url'
    }),
    duration: joi.number().min(1).max(8).required().messages({
        'number.min': 'The duration must be at least 1',
        'number.max': 'The duration must be at most 8',
    }),
    price: joi.number().min(1).max(5).required().messages({
        'number.min': 'The price must be at least 1',
        'number.max': 'The price must be at most 5',
    }),
    hashtags: joi.array().items(joi.string()),
    activities: joi.array().items(joi.string().uri())
})

export default itinerarySchema
