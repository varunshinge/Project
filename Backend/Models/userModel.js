const mongoose=require('mongoose')


let user_schema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    phonenumber:Number,
    role:String,
    password:String
})

let Users = mongoose.model('User',user_schema)
module.exports= {Users}