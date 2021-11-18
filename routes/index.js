const client = require('../database/init/connectionBD')//TODO mettere les config bdd
const allPost = require('../database/get/getPost').getPost
const newPost = require('../database/add/putPost').putPost
const updatePost = require('../database/update/updatePost').updatePost
const newLike = require('../database/add/addLike').addLike
const newCom = require('../database/add/addComment').addCom
const dropCom = require('../database/delete/deleteCom').deletePostCom
const dropPost= require('../database/delete/dropPost').deletePost
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())

// Middleware
app.use(express.json())
app.get('/publications', (req, res)=>{
    allPost(client,res)
})
client.connect();

app.post('/publications/:id', (req, res)=> {
    newPost(client,req,res)
})

app.put('/publications/:id/update', (req, res)=> {
    updatePost(client,req,res)
})

app.put('/publications/:id/like', (req, res)=> {
    newLike(client,req,res)
})

app.put('/publications/:id/com/del', (req, res)=> {
    dropCom(client,req,res)
})

app.put('/publications/:id/com', (req, res)=> {
    newCom(client,req,res)
})

app.delete('/publications/:id/drop', (req, res)=> {
    dropPost(client,req,res)
})

app.listen(3300, () => {
    console.log("Serveur à l'écoute")
  })

