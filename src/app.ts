import express from 'express'
import mongoose from 'mongoose';
import router from './routes/userRoute'
import { DB } from './config/config'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const startApp = async () => {
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB as string, {
        dbName: "auth_db",
    })
        .then(() => {
            console.log("DB CONNECTION SUCCESSFUL!");
        })
        .catch((err:any) =>
            console.log(`An error occured while connecting to DB, ${err}`)
        );
    app.listen(process.env.PORT, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
}

app.use('/api/v1/auth',router )

startApp()
