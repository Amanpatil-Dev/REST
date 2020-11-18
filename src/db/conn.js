const mongoose= require('mongoose')

mongoose.connect("mongodb://localhost:27017/olympics",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then((data)=>{
    console.log('Connection Successfully')

}).catch((err)=>{
    console.log('No connection')
})