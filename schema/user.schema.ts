import joi from 'joi'

const userSchema: joi.Schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(15).required(),
    confirmPassword: joi.string().required().valid(joi.ref('password')).message("Password Confirmation Failed")

})

export const userSigninSchema : joi.Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(15).required()
    
})

export default userSchema