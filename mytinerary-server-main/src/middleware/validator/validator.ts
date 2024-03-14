import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import { ErrorClient } from "../../utils/errorClient";

const validator = (schema: Schema) => (req: Request, _res: Response, next: NextFunction) => {
    
    const validate = schema.validate(req.body, { abortEarly: true })

    if( validate.error ){
       throw new ErrorClient( validate.error.details[0].message, 400 )
    }

    next()
}

export default validator