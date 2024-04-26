import { Response } from "express" 
enum HttpStatus{
    OK = 200,
    CREATED = 201,
    UPDATE = 201
}

export const HttpResponse = {
    Ok(res: Response, data?:any, message:string="Success"): Response{
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMsg: message,
            data: data
        })
    },


    Created(res: Response, data?:any, message:string="Created"): Response{
        return res.status(HttpStatus.CREATED).json({
            status: HttpStatus.CREATED,
            statusMsg: message,
            data: data
        })
    },

    Update(res: Response, data?:any, message:string="Update"): Response{
        return res.status(HttpStatus.UPDATE).json({
            status: HttpStatus.UPDATE,
            statusMsg: message,
            data: data
        })
    },
}