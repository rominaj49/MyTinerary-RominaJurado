import { Request, Response, NextFunction } from "express" 
export const catchedAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => fn(req, res).catch( (err:Error) => {
    console.log('Error: ', err.message)
    next(err) 
})
        
    
