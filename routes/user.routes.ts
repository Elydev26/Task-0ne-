import express, { Router } from 'express'
import validateReq from '../middlewares/vallidateRequestBody'
import userSchema, { userSigninSchema } from '../schema/user.schema'
import { createUserHandler,  } from '../controller/createUserController'
import { loginUserHandler } from '../controller/loginController'



const userRoute = Router()


userRoute.post('/register/users', validateReq(userSchema), createUserHandler)
userRoute.post('/login/users', validateReq(userSigninSchema), loginUserHandler)

export default userRoute