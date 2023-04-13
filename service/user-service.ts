import userModel, { IUser} from "../model/user.model";
import {omit} from 'lodash'


export async function createUser(userInput: IUser){
    try{
        let user = await userModel.findOne({email: userInput.email})

        if(user) throw new Error("Email already exist")

        user = await userModel.create(userInput)
        return omit(user.toJSON()," password")
    }
    catch(error: any){
        throw new Error(error)
    }
}

export async function validateUser({email, password}: {email: string, password: string}){
    const user = await userModel.findOne({email: email})
    console.log(user)

    if(!user) return false
    const isValid = await user.comparePasswoerd(password)
    if(!isValid) return false
    return (omit(user.toJSON(), "password"))

}