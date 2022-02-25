const mongoose = require('mongoose');

const cultureSchema = mongoose.Schema({
    valeur:{
        type:String,
        required:true
    },
    annee:{
        type:String,
        required:true
    }
})

const culture = mongoose.model('culture', cultureSchema);

module.exports = culture;