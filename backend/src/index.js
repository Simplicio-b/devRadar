const express = require('express')
const mongoose = require('mongoose')

// routes
const routes = require('./routes')

mongoose.connect("mongodb+srv://simp42:123456789hdf@cluster0-zan5o.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()


app.use(express.json())
app.use(routes)

app.listen(9100)