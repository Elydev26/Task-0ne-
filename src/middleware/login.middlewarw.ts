import { Request, Response, NextFunction } from 'express'
import joi, { string } from 'joi'
import { userloginSchema } from '../schema/user.schema'
import { userLogin } from '../controllers/auth.controller'
import User from '../models/user.model'
import { currentUser } from '../service/user.service'
import { AnyARecord } from 'dns'


const loginHandler = (userSchema: joi.Schema) => (req: Request, res: Response, next: NextFunction) => {

    const { error } = userSchema.validate(req)
    console.log("these is the response----->", error?.message)
    if (error) {

       return res.status(400).send(error.details[0].message)

    
    }
}

export default loginHandler