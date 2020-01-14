const express = require('express')
const mongoose = require('mongoose')


const app = express()

mongoose.connect("mongodb+srv://simp42:123456789hdf@cluster0-zan5o.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

// Metodos GET, POST, PUT, DELETE

// TIPOS DE PARAMETRO
// QUERY PARAMS: req.query(filtros, ordenacao, ...)
// ROUTE PARAMS: req.params (identifica um recurso de alteracao ou remocao) 
// BODY: req.body (recebe os dados da requisicao adivindas do method post)

//  Mongo db

app.post('/users', (req, res) => {
    console.log(req.body)
    return res.json({
       id: 1,
       message: 'Hello express'
    }) 
})

app.listen(9100)