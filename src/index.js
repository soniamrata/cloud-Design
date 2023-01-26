const express = require('express')
const{default:mongoose} = require("mongoose")
const port = 3000
const app = express()
const route = require("./routes/route")

app.use(express.json()) 

mongoose.connect("", { useNewUrlParser: true })

.then(()=> console.log("MongoDb is connected"))
.catch( err => console.log(err))

app.use('/', route)

app.use(function(req,res){
    res.status(400).send({status:false,message:"incorrect url"})
})

app.listen(port,function(){
    console.log("express app running on the port 3000")
})

