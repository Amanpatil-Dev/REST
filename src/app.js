console.log('running')
const { json } = require('express')
const express = require('express')
const app = express()
const MensRanking = require('../src/models/mens')
require('../src/db/conn')
const Port = process.env.PORT || 3000

// Parsing the datat which is comming form postman request
app.use(express.json())

// Creating new user
app.post('/api/users', async (req, res) => {
    try {
        console.log(req.body)
        if (!req.body) {
            res.status(500).send({ message: "please provide all the filds" })
            return
        } else {
            const OlyAthlete = new MensRanking(req.body)
            await OlyAthlete.save()
            res.status(201).send(OlyAthlete)

        }


    } catch (error) {
        res.status(500).send(error)

    }
})

app.get('/api/users', async (req, res) => {
    try {
        const OlyAthlete = await MensRanking.find({}).sort({'ranking':1})
        res.status(200).send(OlyAthlete)

    } catch (error) {
        res.status(404).send()

    }
})

app.get('/api/users/:id', async (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id
    try {
        const OlyAthlete = await MensRanking.findById(id)
        if (!OlyAthlete) {
            res.status(404).send({ message: "NotFOund" })
        } else {
            res.status(200).send(OlyAthlete)
        }


    } catch (error) {
        res.status(404).send({ message: "Not found" })

    }


})

app.patch('/api/users/:id',async (req, res) => {
    try {
        const _id=req.params.id
        const OlyAthlete=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(OlyAthlete);
    } catch (error) {
        res.status(400).send()
        
    }
})

app.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id

    try {
        if (!id) {
            res.status(500).send({ message: "please provide the id" })
        }
        else {
            const OlyAthlete = await MensRanking.findByIdAndDelete(id)
            if (!OlyAthlete) {
                res.status(404).send({message: "Cannot Find The Athlete"})
            }
            else {
                res.send({
                    OlyAthlete,
                    message: "User Successfully Deleted"
                })
            }


        }

    } catch (error) {
        res.status(500).send({
            message: error
        })

    }
})

app.listen(Port, () => {
    console.log(`server is up and running`)
})