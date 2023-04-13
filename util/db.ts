import express from 'express'
import config from 'config'
import mongoose from 'mongoose'

const connect = async() => {
    mongoose.connect(config.get<string>("dbUri"))
    .then(() => {console.log("connected to the db Successfully")})
    .catch((e:any) => (console.error(e)))
}

export default connect

const startApp = async () => {
    mongoose.set('strictQuery', false)
    await mongoose.connect(config.get<string>("dbUri"))
        .then(() => {
            console.log("DB CONNECTION SUCCESSFUL!");
        })
        .catch((err) =>
            console.log(`An error occured while connecting to DB, ${err}`)
        );

}

startApp()