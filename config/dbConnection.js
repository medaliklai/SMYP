const mongoose = require('mongoose');

const dbConnection = ()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

module.exports = dbConnection;