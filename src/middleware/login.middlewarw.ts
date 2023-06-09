import { Request, Response, NextFunction } from 'express'
import { userloginSchema } from '../schema/user.schema'



export const loginHandler = async(req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    try{
        await userloginSchema.validateAsync(req.body)
        next()

    }catch(error: any){
        res.status(400).json({error: error.details[0].message})
    }
}

export default loginHandler