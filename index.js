const express = require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()
app.use(cors())
const userRouter=require('./router/userrouter')


mongoose.connect(process.env.mongoUrl).then(()=>{
console.log('Database connected')
}).catch((err)=>{
    console.log('Database error')
})  
app.use(express.json())
app.use('/apii',userRouter)




app.listen(3000,() =>{
 console.log('port is connected')
})
  