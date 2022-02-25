const mongoose = require('mongoose');
const tempSchema = new mongoose.Schema({
    valeur:{
        type:String,
        required:true
    },
    annee:{
        required:true,
        type:String
    }
})

const Temperature = mongoose.model('temperature',tempSchema);

module.exports = Temperature;