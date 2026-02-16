// importaciones
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'

// configuraciones
dotenv.config()
const app=express();
app.use(express.json());


app.use('/user', userRouter)

const PORT=  process.env.PORT||3001;

// API
app.get('/', (req, res)=>{
    res.send("pruebas")
})


app.listen(PORT, ()=>{
    console.log(`estas conectado al servidor http://localhost:${PORT}`)
})


