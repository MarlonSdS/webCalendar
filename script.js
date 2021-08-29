
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
   esconderEvento()
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
   esconderEvento()
   gerarDias()
}
//create the words in the header, like the month name and the number of the year
function construirHeader(){
    var a = document.getElementById('ano')
    
    var b = getDate.month + ", " + getDate.year
    a.innerHTML = b
}

//to generate all the td's with the number of the days
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
        d.setAttribute('onclick','exibirEvento('+index+')')
        if(mesNow == data.getMonth() && index == data.getDate()){
            d.setAttribute('class', 'diaAtual')
        }

        c.appendChild(d)
        //c = document.write('<script>document.addEventListener(onclick, exibirEvento('+f+'))</script>')
        
    }
}

//to show the lateral options 
function exibirEvento(dia){
    let a = document.getElementById('h1')
    let b = document.getElementById('h2')
    let c = document.getElementById('btn')
    console.log(dia)
    a.style.display = "block"
    b.style.display = "block"
    c.style.display = "block"
    let d = document.getElementsByClassName('input')
    let i1 = d[0]
    let i2 = d[1]
    let i3 = d[2]

    console.log(i1, i2, i3)

    i1.style.display = "none"
    i2.style.display = "none"
    i3.style.display = "none"
}
//to hide the lateral options
function esconderEvento(){
    let a = document.getElementById('h1')
    let b = document.getElementById('h2')
    let c = document.getElementById('btn')
    a.style.display = "none"
    b.style.display = "none"
    c.style.display = "none"
    let d = document.getElementsByClassName('input')
    let i1 = d[0]
    let i2 = d[1]
    let i3 = d[2]

    console.log(i1, i2, i3)

    i1.style.display = "none"
    i2.style.display = "none"
    i3.style.display = "none"
}

function btnAddClick(){
    let a1 = document.getElementById('h1')
    let a2 = document.getElementById('h2')
    let a3 = document.getElementById('btn')

    let a = document.getElementsByClassName('input')
    let i1 = a[0]
    let i2 = a[1]
    let i3 = a[2]

    console.log(i1, i2, i3)

    i1.style.display = "block"
    a1.style.display = "none"
    i2.style.display = "block"
    a2.style.display = "none"
    i3.style.display = "block"
    a3.style.display = "none"
}
