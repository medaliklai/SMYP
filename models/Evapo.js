const mongoose = require('mongoose');

const evapoSchema = mongoose.Schema({
    valeur:{
        type:String,
        required:true
    },
    annee:{
        type:String,
        required:true
    }
})

const evapo = mongoose.model('evapo', evapoSchema);

module.exports = evapo;