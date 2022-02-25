const mongoose = require('mongoose');

const stationSchema = mongoose.Schema({
    valeur:{
        type:String,
        required:true
    },
    annee:{
        type:String,
        required:true
    }
})

const station = mongoose.model('station', stationSchema);

module.exports = station;