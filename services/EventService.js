const event = require('../models/Event');
const mongoose = require('mongoose');
const eFactory = require('../factories/EventFactory')

const Event = mongoose.model("Event", event);

class EventService{

    async create(name, description, date, time){
        var newEvent = new Event({
            name,
            description,
            date,
            time,
            finished: false
        })
        try{
            newEvent.save()
            return true;
        }catch(err){
            console.log(err)
            return false
        }
        
    }

    async getAll(showFinished){
        if(showFinished){
            return await Event.find()
        }else{
             var events = await Event.find({'finished': false})
             var evArray = []
             events.forEach(event =>{
                 if(event.date != undefined){
                     evArray.push(eFactory.build(event))
                 }
             })

             return evArray
        }
    }

    async getById(id){
        try{
           var ev = await Event.findOne({'_id': id}) 
           return ev
        }catch(err){
            console.log(err)
        }
        

    }

    async finish(id){
        try{
           await Event.findByIdAndUpdate(id, {finished: true}) 
           return true
        }catch(err){
            console.log(err)
            return false
        }
        
    }

}

module.exports = new EventService();