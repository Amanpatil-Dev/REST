console.log('running')
const express=require('express')
const app=express()
const MensRanking=require('../src/models/mens')
require('../src/db/conn')
const Port=process.env.PORT || 3000



app.post('/api/users',(req,res)=>{
    res.send('create')
})

app.get('/api/users',(req,res)=>{
    res.send('read')
})

app.get('/api/users/:id',(req,res)=>{
    res.send('byid')
})

app.patch('/api/users',(req,res)=>{
    res.send('update')
})
app.delete('/api/users',(req,res)=>{
    res.send('delete')
})

app.listen(Port,()=>{
    console.log(`server is up and running`)
})