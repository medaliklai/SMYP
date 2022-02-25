const Temperature =  require('../models/Temperature')

const temp_get = async (req, res)=>{
   const temps = await Temperature.find();
   res.render('admin/temperature',{
       title:'Temperature',
       temps
   })
}

const temp_post = async (req, res)=>{
    const {valeur, annee} = req.body;
    
    const newTemp = await Temperature.create({valeur, annee});
    res.json(newTemp);
};

const temp_delete = async (req, res)=>{
    const id = req.params.id;
    Temperature.findByIdAndDelete(id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
  
}

const temp_put =  (req, res)=>{
    const newTemp = req.body;
    const id = req.params.id;
    Temperature.findByIdAndUpdate(id, newTemp)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err)
    })
}
const modifier_temp = async(req, res)=>{
    const id = req.params.id;
    const temp = await Temperature.findById(id)
    res.render('admin/modifier_temp',{
        title:'modifier_temp',
        temp
    })
}
module.exports = {
    temp_get,
    temp_post,
    temp_delete,
    temp_put,
    modifier_temp
}