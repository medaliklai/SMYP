const Station = require('../models/station');

const station_get = async (req, res)=>{
    const stations = await Station.find();
    res.render('admin/stations',{
        title:"station",
        stations:stations
    })
}

const station_post = async (req, res)=>{
    const {valeur, annee} = req.body;
    
    const newstation = await Station.create({valeur, annee});
    res.json(newstation);
};

const station_delete = async (req, res)=>{
    const id = req.params.id;
    Station.findByIdAndDelete(id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
  
}

const station_put =  (req, res)=>{
    const newstation = req.body;
    const id = req.params.id;
    Station.findByIdAndUpdate(id, newstation)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err)
    })
}
const modifier_station = async(req, res)=>{
    try{
        const id = req.params.id;
        const station = await Station.findById(id)
        res.render('admin/modifier_stations',{
            title:'modifier_station',
            station
        })
        
    }
    catch(err){
        console.log(err)
    }
   
}
module.exports = {
    station_get,
    station_post,
    station_delete,
    station_put,
    modifier_station
}