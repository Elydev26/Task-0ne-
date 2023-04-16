import { Request, Response, NextFunction } from 'express'
import joi, { string } from 'joi'
import { userloginSchema } from '../schema/user.schema'
import { userLogin } from '../controllers/auth.controller'
import User from '../models/user.model'
import { currentUser } from '../validator/usersvalidator'
import { AnyARecord } from 'dns'

// async function loginHandler(req: Request, res: Response) {
//     try{
//         const {email, password}= await userloginSchema.validateAsync(req.body)

//     } catch(error: any){
//         res.status(400).json({error: error.message})
//     }
// }

const loginHandler = (userSchema: joi.Schema) => (req: Request, res: Response, next: NextFunction) => {


    const { error } = userSchema.validate(req)
    console.log("these is the response----->", error?.message)
    if (error) {
        // throw new Error
       return res.status(400).send(error.details[0].message)

    
    }
}

export default loginHandler