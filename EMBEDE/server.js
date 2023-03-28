const express = require('express');
const {connmon, cbLog} = require('mongorester');
const app = express();

//db connection 
const mongoose = connmon("mongodb+srv://isaac:major@cluster0.8eppx.mongodb.net/nodejs?retryWrites=true&w=majority");
//const mongoose = connmon("http://localhost:8080");

const {Schema,model} = mongoose

const Address = new Schema(
    {
        street : String,
        state : String,
        zip :String
    }
)
const Dog = new Schema({
    name : String ,
    age : Number
})
const OwnerSchema = new Schema({
    name : String,
    address : [Address],
    dogs : [Dog]
})

const Owner = model("Owner", OwnerSchema)

//routes
app.use(express.json())
app.post("/createowner", async (req,res) => {
    res.json(await Owner.create(req.body))
})

app.post("/addr/:name", async(req, res) => {
    const {name}= req.params
    const owner = await Owner.findOne({name})
    owner.address.push(req.body)
    owner.save()
    res.json(owner)
    })

app.post("/dog/:name", async(req, res) => {
    const {name}= req.params
    const owner = await Owner.findOne({name})
    owner.dogs.push(req.body)
    owner.save()
    res.json(owner)
    })

app.post("/abandon/:name/:id", async(req, res) => {
    const {name, id}= req.params
    const owner = await Owner.findOne({name})
    owner.dogs.splice(id, 1)
    owner.save()
    res.json(owner)
    })

app.listen(3000 , cbLog("server","Listening on port 3000"))

//paul  6422c901a07b6d3e0931f8be