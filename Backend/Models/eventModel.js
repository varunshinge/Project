const mongoose=require('mongoose')


let event_schema=mongoose.Schema({
    event_name:String,
    event_date:String,
    event_time:String,
    venue:String,
    organizer_name:String,
    organizer_contact:String,
    event_description:String,
    event_image:String
})

let Events= mongoose.model('Event',event_schema)
module.exports= {Events}