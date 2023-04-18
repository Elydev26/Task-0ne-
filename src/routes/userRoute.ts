import { Router } from 'express'
import { register, userLogin } from '../controllers/auth.controller'
import userRegisterSchema from '../schema/user.schema'
import userloginSchema  from '../schema/user.schema'
import registerHandler from '../middleware/reg.middleware'
import loginHandler from '../middleware/login.middlewarw'


const router = Router() 

router.post("/register",registerHandler(userRegisterSchema),register)


router.post("/login",loginHandler(userloginSchema), userLogin)

export default router