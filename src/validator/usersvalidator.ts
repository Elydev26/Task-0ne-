import userModel, { IUser } from "../models/user.model";



export async function createUser(userInput: IUser) {
    try {
        let user = await userModel.findOne({ email: userInput.email })

        if (user) throw new Error("Email already exist") 
        user = await userModel.create(userInput)
        return (user.toJSON())
    }
    catch (error: any) {
        throw new Error(error)
    }
}

export async function currentUser({ email, password }: { email: string, password: string }) {
    const user = await userModel.findOne({ email: email })
    console.log(user)

    if (!user) return false
    const isValid = await user.comparePassword(password)
    if (!isValid) return false
    return ((user.toJSON()))

}
