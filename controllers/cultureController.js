const Culture = require('../models/Culture');

const culture_get = async (req, res)=>{
    const cultures = await Culture.find();
    res.render('admin/culture',{
        title:"culture",
        cultures:cultures
    })
}

const culture_post = async (req, res)=>{
    const {valeur, annee} = req.body;
    
    const newCulture = await Culture.create({valeur, annee});
    res.json(newCulture);
};

const culture_delete = async (req, res)=>{
    const id = req.params.id;
    Culture.findByIdAndDelete(id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
  
}

const culture_put =  (req, res)=>{
    const newCulture = req.body;
    const id = req.params.id;
    Culture.findByIdAndUpdate(id, newCulture)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err)
    })
}
const modifier_culture = async(req, res)=>{
    const id = req.params.id;
    const culture = await Culture.findById(id)
    res.render('admin/modifier_culture',{
        title:'modifier_culture',
        culture
    })
}
module.exports = {
    culture_get,
    culture_post,
    culture_delete,
    culture_put,
    modifier_culture
}