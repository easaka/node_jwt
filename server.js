require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts=[
    {
        username: "me",
        title: "post 1"
    },
    {
        username: "you",
        title: "post 2"
    }
]

app.get('/posts',(req,res)=>{
res.json(posts)
})

app.post('/login',(req,res)=>{
    const username = req.body.username
    const user = { name: username}
    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accesstoken: accesstoken})
})

app.listen(3000,()=>{
    console.log('It works');
})
