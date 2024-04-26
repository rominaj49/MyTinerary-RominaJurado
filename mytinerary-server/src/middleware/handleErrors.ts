import { Response } from "express"
import { ErrorClient } from "../utils/errorClient"

const handleErrors = (err: Error, res: Response ) => {
    if(err instanceof ErrorClient) {
        return res.status(err.statusCode).json({
            error: true,
            status: err.statusCode,
            statusMsg: err.message
        })
    }
    return res.status(500).json({
        error: true,
        status: 500,
        statusMsg: 'Internal Server Error'
    })
}

export default handleErrors