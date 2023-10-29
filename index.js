import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './rutas/routes.js';

dotenv.config()

const cadenaMongo = process.env.URL
mongoose.connect(cadenaMongo)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})
database.once('connected',()=>{
    console.log("conexion exitosa")
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router)

app.listen(process.env.PORT)
console.log("Server runing on http://localhost:3000")