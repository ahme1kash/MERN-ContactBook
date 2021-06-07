import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
})
autoIncrement.initialize(mongoose.connection)
userSchema.plugin(autoIncrement.plugin,'user')
const user =  mongoose.model('user',userSchema)
export default user