class EventFactory{

    build(simpleEvent){

        var day = simpleEvent.date.getDate()+1
        var month = simpleEvent.date.getMonth()
        var year = simpleEvent.date.getFullYear()

        var hour = Number.parseInt(simpleEvent.time.split(':')[0]) 
        var minutes = Number.parseInt(simpleEvent.time.split(':')[1]) 

        var startDate = new Date(year, month, day, hour, minutes, 0, 0)

        var event = {
            id: simpleEvent._id,
            title: simpleEvent.name + " - " + simpleEvent.description,
            start: startDate,
            end: startDate
        }

        return event
    }

}

module.exports = new EventFactory();