const e = require('express')
const express = require('express')
const app = express()
const bp = require('body-parser')
const mongoose = require('mongoose')

app.use(express.static("public"))
app.use(bp.urlencoded({extended: false}))
app.use(bp.json())

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/agendamento', {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req, res) =>{
    res.send("Oi")
})

app.get("/cadastro", (req, res) =>{
    res.render("create")
})

app.listen(8080, () => {console.log("Servidor rodando")})