
let data = new Date();
//object to get the actual date and save in difernte variable that will be use in the entire project
    let getDate = {
        year: data.getFullYear(),
        month: getMes(data.getMonth()),
        day: data.getDate(),
        feira: data.getDay()
    }
// function to convert the number returned by getMonth into string
function getMes(object){
    switch (object) {
        case 0:
            return "January"
            break;
        case 1:
            return "February"
            break;
        case 2:
            return "March"
            break;
        case 3:
            return "April"
            break;
        case 4:
            return "May"
            break;
        case 5:
            return "June"
            break;
        case 6:
            return "July"
            break;
        case 7:
            return "August"
            break;
        case 8:
            return "September"
            break;
        case 9:
            return "October"
            break;
        case 10:
            return "November"
            break;
        case 11:
            return "December"
            break;
        default:
            break;
    }
}
let mesNow = data.getMonth();
let mesNowStr = getMes(mesNow)
//changes to the previous month
function mesAnterior(){
    let data = new Date();
    getDate.month = getMes(mesNow - 1)
    mesNow = mesNow - 1;
    console.log(mesNow)
    console.log(getDate.month)
    if(mesNow <= 0){
        mesNow = 12;
        console.log(mesNow)
    console.log(getDate.month)
        
    }
    if(mesNow == 11){
        getDate.year = getDate.year - 1;
    }
   construirHeader()
}
//changes to the next month
function mesSeguinte(){
    let data = new Date();
    getDate.month = getMes(mesNow + 1)
    mesNow = mesNow + 1;
    console.log(mesNow)
    console.log(getDate.month)
    if(mesNow >= 11){
        mesNow = -1;
        console.log(mesNow)
    console.log(getDate.month)
        
    }
    if(mesNow == 0){
        getDate.year = getDate.year + 1;
    }
   construirHeader()
}
//create the words in the header, like the month name and the number of the year
function construirHeader(){
    var a = document.getElementById('ano')
    
    var b = getDate.month + ", " + getDate.year
    a.innerHTML = b
}