const Evapo = require('../models/evapo');

const evapo_get = async (req, res)=>{
    const evapos = await Evapo.find();
    res.render('admin/evapo',{
        title:"evapo",
        evapos
    })
    
}

const evapo_post = async (req, res)=>{
    const {valeur, annee} = req.body;
    
    const newevapo = await Evapo.create({valeur, annee});
    res.json(newevapo);
};

const evapo_delete = async (req, res)=>{
    const id = req.params.id;
    Evapo.findByIdAndRemove(id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
  
}

const evapo_put =  (req, res)=>{
    const newevapo = req.body;
    const id = req.params.id;
    Evapo.findByIdAndUpdate(id, newevapo)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err)
    })
}
const modifier_evapo = async(req, res)=>{
    const id = req.params.id;
    const evapo = await Evapo.findById(id)
    res.render('admin/modifier_evapo',{
        title:'modifier_evapo',
        evapo
    })
}
module.exports = {
    evapo_get,
    evapo_post,
    evapo_delete,
    evapo_put,
    modifier_evapo
}