const User = require('../models/User');
const Culture = require('../models/Culture');


const rendement = (req,res)=>{
    res.render('rendement',{
        title:'Rendement'
    })
}
const suivi = async(req,res)=>{
    const cultures = await Culture.find();
    res.render('suivi',{
        title:'Suivi',
        cultures
    })
}
const bulletin = (req,res)=>{
    res.render('bulletin',{
        title:"Bulletin"
    })
}

const admin_home = (req, res)=>{
    res.render('admin/dashboard',{
        title:"dashboard"
    });
}
const users =async(req, res)=>{
    const users = await User.find();
    res.render('admin/users',{
        title:'users_page',
        users
    })
}
const stations  = (req, res)=>{
    res.render('admin/stations',{
        title:'stations'
    })
}
const modifier_user = (req, res)=>{
    res.render('admin/modifier_user',{
        title:"Modifier-user"
    });
}
const modifier_station = (req, res)=>{
    res.render('admin/modifier_stations',{
        title:"modifier_station"
    })
}
const ajouter_user = (req, res)=>{
    res.render('admin/ajouter_user',{
        title:"ajouter_user"
    })
}
const ajouter_station = (req, res)=>{
    res.render('admin/ajouter_station',{
        title:'ajouter_station'
    })
}



const ajouter_culture = (req, res)=>{
    res.render('admin/ajouter_culture',{
        title:'ajouter_culture'
    })
}


const evapo = (req, res)=>{
    res.render('admin/evapo',{
        title:'Evapotranspiration'
    })
}

const ajouter_evapo = (req, res)=>{
    res.render('admin/ajouter_evapo',{
        title:'ajouter_evapo'
    })
}

const modifier_evapo = (req, res)=>{
    res.render('admin/modifier_evapo',{
        title:'modifier_evapo'
    })
}


const ajouter_temp = (req, res)=>{
    res.render('admin/ajouter_temp',
    {
        title:"ajouter_temp"
    });
}

module.exports = {
    rendement,
    suivi,
    bulletin,
    admin_home,
    users,
  
    modifier_user,
  
    ajouter_user,
    ajouter_station,
    ajouter_culture,
    evapo,
    ajouter_evapo,
    modifier_evapo,
    ajouter_temp,
    
}