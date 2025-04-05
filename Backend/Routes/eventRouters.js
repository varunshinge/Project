const express=require('express')
const {Events}=require('../Models/eventModel')

const eventRouter=express.Router()

eventRouter.post('/addEvent', function(request,response){
    console.log('Add Event data from frontend:',request.body)
    Events.insertOne(request.body)
    .then(function(){
        console.log('Data is inserted successfull')
        response.json({message:'Event added succsessfully',status:true})
    })
    .catch(function(){
        console.log('Error in insert data')
        response.json({message:'Event add failed',status:false})
    })
})

eventRouter.delete('/deleteEvent/:eventid', function(request,response){
    console.log('Event id parameter for delete event:',request.body)
    
    Events.deleteOne({_id: request.params.eventid})
    .then(function(){
        console.log('Event Data deleted successfully')
        response.json({message:'Delete Event Successfully',status:true})
    })
    .catch(function(error){
        console.log('Error in delete event:',error)
        response.json({message:'Failed to Delete Event Data',status:false})
    })
})

eventRouter.get('/AllEventData',function(request,response){
    Events.find({})
    .then(function(monkey){
        console.log('Got all event data successfully:',monkey)
        response.json({message:'Fetched all data successfully',status:true,data:monkey})
    })
    .catch(function(error){
        console.log('Error in get all event data:',error)
        response.json({message:'Failed to fetch all data',status:false})
    })
})

eventRouter.put('/EditEvent/:event_id',function(request,response){

    console.log('Parmeter data(event id):',request.params)

    console.log('Edit event data from frontend:', request.body)

    Events.updateOne({_id: request.params.event_id},{$set: request.body})
    .then(function(result){
        console.log('Edit result:', result)
        response.json({message:'Event update data successfull',status:true, data:result})
    })
    .catch(function(error){
        console.log('Failed to edit event:', error)
        response.json({message:'Failed to update event data',status:false})
    })
})

eventRouter.get('/OneEventDetails/:event_id',function(request,response){
    Events.findOne({_id: request.params.event_id})
    .then(function(result){
        response.json({message:'Successfully fetched Particular Event Data', status:true, data:result})
    })
    .catch(function(error){
        response.json({message:'Failed to fetch data', status:false})
    })

})


module.exports={eventRouter}