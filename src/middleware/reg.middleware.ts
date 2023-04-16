import  { Request, Response, NextFunction} from 'express'
import joi, { string } from 'joi'
import { userloginSchema } from '../schema/user.schema'
import { userLogin } from '../controllers/auth.controller'

// export class validator {

 const registerHandler = (userSchema: joi.Schema) => (req: Request, res: Response, next: NextFunction) =>{

    const { error } = userSchema.validate(req.body)
    

    if(error) return res.status(400).send(error.details[0].message)
     
    next()
}



export default  registerHandler