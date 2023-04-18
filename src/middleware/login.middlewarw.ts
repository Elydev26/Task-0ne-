import { Request, Response, NextFunction } from 'express'
import joi from 'joi'



const loginHandler = (userLoginSchema: joi.Schema) => (req: Request, res: Response, next: NextFunction) => {

    const { error } = userLoginSchema.validate(req)
    //  console.log("these is the response----->", error?.message)
    if (error) {

       return res.status(400).send(error.details[0].message)

    
    }
    next()
}

export default loginHandler