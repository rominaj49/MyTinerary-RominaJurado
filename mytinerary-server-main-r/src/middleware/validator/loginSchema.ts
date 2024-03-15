import joi from 'joi'

const loginSchema = joi.object({
    email: joi.string().email().min(10).max(30).trim().required().messages( {
        'string.min': 'The email must have at least 10 characters',
        'string.max': 'The email must have at most 20 characters',
        'string.email': 'The email must be a valid email'
    } ),
    password: joi.string().min(8).max(16).trim().required().messages({
        'string.min': 'The country must have at least 8 characters',
        'string.max': 'The country must have at most 16 characters',
    })
})

export default loginSchema