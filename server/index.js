// import express from 'express'
import express  from "express" 
import mongoose  from 'mongoose'
import route  from  './route/routes.js'
import cors   from 'cors'
import bodyParser  from 'body-parser'
const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',route)


const PORT = 5000
const url = 'Put your connection string generated in mongo db'
mongoose.connect(url,{
    useNewUrlParser:"true",
    useFindAndModify:"false",
    useUnifiedTopology:"true",
    useCreateIndex: true,
    
}).then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
    })
}).catch(error=>{
    console.log('Error:',error.message)
})
