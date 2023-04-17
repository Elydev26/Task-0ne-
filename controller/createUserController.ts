import { Request, Response} from 'express'
import {IUser} from '../src/model/user.model'
import { createUser} from '../src/service/user-service'

export async function createUserHandler(req: Request, res:  Response) {
    try{
        const user = await createUser(req.body)
        res.send(user)
    } catch(e:any){
        res.status(409).send(e.message)
    }   
}