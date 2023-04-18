import { Request, Response, NextFunction } from 'express'
import joi from 'joi'



const loginHandler = (userloginSchema: joi.Schema) => (req: Request, res: Response, next: NextFunction) => {

    const { error } = userloginSchema.validate(req.body)
    if (error) {

       return res.status(400).send(error.details[0].message)

    
    }
    next()
}

export default loginHandler