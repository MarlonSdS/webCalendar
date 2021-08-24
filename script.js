
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
   gerarDias()
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
   gerarDias()
}
//create the words in the header, like the month name and the number of the year
function construirHeader(){
    var a = document.getElementById('ano')
    
    var b = getDate.month + ", " + getDate.year
    a.innerHTML = b
}

function gerarDias(){
    let c = document.getElementById('table')
    c.innerHTML = ""
    let mesLength = 31;
    if(mesNow == 12){
        mesNow = 0
    }
    if(getDate.month == "February"){
        mesLength = 29
    }else if(getDate.month == "January"){
        mesLength = 32
    }else if(getDate.month == "March"){
        mesLength = 32
    }else if(getDate.month == "May"){
        mesLength = 32
    }else if(getDate.month == "July"){
        mesLength = 32
    }else if(getDate.month == "August"){
        mesLength = 32
    }else if(getDate.month == "October"){
        mesLength = 32
    }else if(getDate.month == "December"){
       mesLength = 32
    }else{
       mesLength = 31
    }
    console.log(mesNow)
    console.log(mesLength)
    for (let index = 1; index < mesLength; index++) {
        let c = document.getElementById('table')

        let d = document.createElement('td')
        let e = document.createTextNode(index)
        d.innerHTML = ""
        d.appendChild(e)
        let f = "td"+index
        d.setAttribute('id', f)
        if(mesNow == data.getMonth() && index == data.getDate()){
            d.setAttribute('class', 'diaAtual')
        }

        c.appendChild(d)
    }
}