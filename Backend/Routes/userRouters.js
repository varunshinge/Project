const express=require('express')
const {Users}=require('../Models/userModel')

const userRouter=express.Router()

userRouter.post('/register', function(request,response){
    console.log('API Register Data from frontend:', request.body)

    Users.findOne({email: request.body.email})
    .then(function(result){
        console.log('Result of Find One query:', result)
        if(result){
            console.log("___________________________User Email already exist")
            response.send({message:'User already Exist with this email',status:false,data:result})
        }
        else{
            console.log("_______________________User not existed with this email")
            Users.insertOne(request.body)
            .then(function(result2){
                console.log('User data registered successfull:', result2)
                response.json({message:'User Data registered successfull',status:true,data:result2})
            })
            .catch(function(error){
                console.log('Failed to register user data:',error)
                response.json({message:'Failed to register user data',status:false })
            })
        }
    })
    .catch(function(){
        console.log('Error in Find One query')
    })

})

userRouter.post('/login', function(request,response){
    console.log('Login data from frontend:',request.body)
    Users.findOne({email:request.body.email})
    .then(function(result){
        console.log('Login query executed successfully:', result)
        if(result){
            if(result.password===request.body.password){
                response.json({message:'Login Successfull', status:true, data:result})
            }
            else{
                response.json({message:'Invalid Password', status:false})
            }
        }
        else{
            response.json({message:'User with this email not exist',status:false})
        }
    })
    .catch(function(){
        console.log('Failed to execute login query')
        response.json({message:'Failed to execute login query',status:false})
    })
})

module.exports={userRouter}