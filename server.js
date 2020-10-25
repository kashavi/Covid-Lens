const express = require('express')
const session = require('express-session')
const Queries = require('./db').Queries

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))

app.post('/query',(req,res)=>{
    console.log('In Query')
    Queries.create({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        query:req.body.query
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        console.log(err)
        res.redirect('/')
    })
})

app.listen(4333,()=>{
    console.log('Server started at http://localhost:4333')
})
