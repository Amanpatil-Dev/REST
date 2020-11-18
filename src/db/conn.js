const mongoose= require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then((data)=>{
    console.log('Connection Successfully')

}).catch((err)=>{
    console.log('No connection')
})