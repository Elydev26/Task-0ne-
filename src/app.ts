import express from 'express'
import config from 'config'
import connect from '../util/db'
import userRoute from '../routes/user.routes'


const app = express()
const PORT = config.get<number>("PORT")

app.listen(PORT, async() =>{
    console.log(`server running on http://localhost:${PORT}`)

    await connect()

    app.use('/api/v1/user', userRoute)
}
)







