const mongoose=require('mongoose')

require('dotenv').config()
const URL=process.env.DB_HOST + process.env.DB_NAME

function db_connection(){
    mongoose
    .connect(URL)
    .then(function(){
        console.log('Database is connected successfull')
    })
    .catch(function(){
        console.log('Failed to connect with Database')
    })
}

module.exports={db_connection}























// mongoose.connect('mongodb://localhost:27017/Chikodi')
// .then(function(){
//     console.log('Database is connected successfully')
// })
// .catch(function(){
//     console.log('Failed to connect with database')
// })

// let user_schema = mongoose.Schema({
//     name:String,
//     email:{
//         type:String,
//         unique:true
//     },
//     phonenumber:Number,
//     role:String,
//     password:String
// })

// let event_schema=mongoose.Schema({
//     event_name:String,
//     event_date:String,
//     event_time:String,
//     venue:String,
//     organiser_name:String,
//     organiser_contact:String,
//     event_description:String,
//     event_image:String
// })

// let Users = mongoose.model('User',user_schema)

// let Events= mongoose.model('Event',event_schema)

// module.exports= {Users, Events}







// // db.users.insertOne({name:'Ash', email:'ash@gmail.com', phonenumber:'0123456789', role:'admin', password:'ash123'})

// // Users.insertOne({name:'Ash', email:'ash@gmail.com', phonenumber:'0123456789', role:'admin', password:'ash123'})
// // .then(function(){
// //     console.log('User is inserted successfully')
// // })
// // .catch(function(){
// //     console.log('Failed to insert user')
// // })

