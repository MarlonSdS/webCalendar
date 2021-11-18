const e = require('express')
const express = require('express')
const app = express()
const bp = require('body-parser')
const mongoose = require('mongoose')
const eventService = require('./services/EventService')

app.use(express.static("public"))
app.use(bp.urlencoded({extended: false}))
app.use(bp.json())

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/agendamento', {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req, res) =>{
    res.render('index')
})

app.get("/cadastro", (req, res) =>{
    res.render("create")
})

app.post("/create", async (req, res) =>{
    var status = await eventService.create(
        req.body.name,
        req.body.description,
        req.body.date,
        req.body.time
    )
    if(status){
        res.redirect("/")
    }else{
        res.send("deu ruim")
    }
})

app.get("/geteventos", async (req, res) =>{
    var evento = await eventService.getAll(false);
    res.json(evento)
})

app.listen(8080, () => {console.log("Servidor rodando")})