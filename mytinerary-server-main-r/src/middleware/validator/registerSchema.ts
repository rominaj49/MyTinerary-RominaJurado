import joi from 'joi'

const registerSchema = joi.object({
    first_name: joi.string().min(3).max(12).trim().regex(/^[a-zA-Z]+$/i).required().messages( {
        'string.min': 'The name must have at least 3 characters',
        'string.max': 'The name must have at most 12 characters',
        'string.pattern.base': 'The name must only contain letters'
    } ),
    last_name: joi.string().min(3).max(16).regex(/^[a-zA-Z]+$/i).trim().required().messages({
        'string.min': 'The country must have at least 3 characters',
        'string.max': 'The country must have at most 16 characters',
    }),
    email: joi.string().email().min(10).max(30).trim().required().messages( {
        'string.min': 'The email must have at least 10 characters',
        'string.max': 'The email must have at most 20 characters',
        'string.email': 'The email must be a valid email'
    } ),
    password: joi.string().min(8).max(16).trim().required().messages({
        'string.min': 'The country must have at least 8 characters',
        'string.max': 'The country must have at most 16 characters',
    }),
    country: joi.string().min(3).max(20).trim().regex(/^[a-zA-Z]+$/i).required().messages({
        'string.min': 'The country must have at least 3 characters',
        'string.max': 'The country must have at most 20 characters',
        'string.pattern.base': 'The country must only contain letters'
    }),
    description: joi.string().min(30).max(500).trim().messages({
        'string.min': 'The description must have at least 30 characters',
        'string.max': 'The description must have at most 500 characters',
    }),
    image: joi.string().uri().messages({
        'string.uri': 'The image must be a valid url'
    }),
    
})

export default registerSchema