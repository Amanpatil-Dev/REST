console.log('running')
const express=require('express')
const app=express()
const MensRanking=require('../src/models/mens')
require('../src/db/conn')
const Port=process.env.PORT || 3000

app.get('/',async (req,res)=>{
    res.send('hello for patil')

})


app.listen(Port,()=>{
    console.log(`server is up and running`)
})