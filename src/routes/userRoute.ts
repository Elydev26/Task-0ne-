import { Router } from 'express'
import { register, userLogin } from '../controllers/auth.controller'
import registerHandler from '../middleware/reg.middleware'
import loginHandler from '../middleware/login.middlewarw'


const router = Router() 

router.post("/register",registerHandler,register)


router.post("/login", loginHandler,userLogin)

export default router