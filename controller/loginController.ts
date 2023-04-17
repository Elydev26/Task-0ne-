import { Request, Response } from 'express';
import { IUser } from '../src/model/user.model';
import { validateUser } from '../src/service/user-service';
import { signjwt } from '../src/util/jwt';


export async function loginUserHandler(req: Request, res: Response)  {
    const user = await validateUser(req.body)

    if(!user) return res.status(400).send("Invalid email or password")
    

        const accessToken = signjwt(user)
        res.send(accessToken)
}