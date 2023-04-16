import { Router } from 'express'
import { register, userLogin } from '../controllers/auth.controller'
import validateReq from '../middleware/validateReq.body'
import userRegisterSchema from '../schema/user.schema'
import userloginSchema  from '../schema/user.schema'


const router = Router() 

router.post("/register",validateReq(userRegisterSchema),register)


router.post("/login", validateReq(userloginSchema), userLogin)

export default router