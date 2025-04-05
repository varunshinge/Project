const {Users}=require('./Models/userModel')
const {Events}=require('./Models/eventModel')
const {eventRouter}=require('./Routes/eventRouters')
const {userRouter}=require('./Routes/userRouters')
const express=require('express')
const app=express()
const cors=require('cors')
const {db_connection}=require('./Database/dbConnection')
require('dotenv').config()




app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
db_connection()

app.use('/api/user',userRouter)
app.use('/api/event',eventRouter)



let PORT= process.env.SERVER_PORT || 8080 
app.listen(PORT,()=>{
    console.log(`Your Server is running on http://localhost:${PORT}`)
})








// app.post('/api/user/register',function(request,response){

//     console.log('API Register Data from frontend:', request.body)

//     Users.findOne({email: request.body.email})
//     .then(function(result){
//         console.log('Result of Find One query:', result)
//         if(result){
//             console.log("___________________________User Email already exist")
//             response.send({message:'User already Exist with this email',status:false,data:result})
//         }
//         else{
//             console.log("_______________________User not existed with this email")
//             Users.insertOne(request.body)
//             .then(function(result2){
//                 console.log('User data registered successfull:', result2)
//                 response.json({message:'User Data registered successfull',status:true,data:result2})
//             })
//             .catch(function(error){
//                 console.log('Failed to register user data:',error)
//                 response.json({message:'Failed to register user data',status:false })
//             })
//         }
//     })
//     .catch(function(){
//         console.log('Error in Find One query')
//     })

//     // Users.insertOne(request.body)
//     // .then(function(){
//     //     response.json({message:'Got register data successfully', status: true, data:request.body})
//     // })
//     // .catch(function(){
//     //     response.json({message:'Failed to register data', status: false, data:request.body})
//     // })

//     // response.json({message:'Got register data successfully', status: true, data:request.body})

// })

// app.post('/api/user/login',(request,response)=>{
    
//     console.log('Login data from frontend:',request.body)
//     Users.findOne({email:request.body.email})
//     .then(function(result){
//         console.log('Login query executed successfully:', result)
//         if(result){
//             if(result.password===request.body.password){
//                 response.json({message:'Login Successfull', status:true, data:result})
//             }
//             else{
//                 response.json({message:'Invalid Password', status:false})
//             }
//         }
//         else{
//             response.json({message:'User with this email not exist',status:false})
//         }
//     })
//     .catch(function(){
//         console.log('Failed to execute login query')
//         response.json({message:'Failed to execute login query',status:false})
//     })
// })

// app.post('/api/event/addEvent',function(request,response){
//     console.log('Add Event data from frontend:',request.body)
//     Events.insertOne(request.body)
//     .then(function(){
//         console.log('Data is inserted successfull')
//     })
//     .catch(function(){
//         console.log('Error in insert data')
//     })
// })


// app.delete('/api/event/deleteEvent/:eventid',function(request,response){
//     console.log('Event id parameter for delete event:',request.body)

//     Events.deleteOne({_id: request.params.eventid})
//     .then(function(){
//         console.log('Event Data deleted successfully')
//         response.json({message:'Delete Event Successfully',status:true})
//     })
//     .catch(function(error){
//         console.log('Error in delete event:',error)
//         response.json({message:'Failed to Delete Event Data',status:false})
//     })
// })

// app.get('/api/event/AllEventData',function(request,response){
//     Events.find({})
//     .then(function(monkey){
//         console.log('Got all event data successfully:',monkey)
//         response.json({message:'Fetched all data successfully',status:true,data:monkey})
//     })
//     .catch(function(error){
//         console.log('Error in get all event data:',error)
//         response.json({message:'Failed to fetch all data',status:false})
//     })
// })

