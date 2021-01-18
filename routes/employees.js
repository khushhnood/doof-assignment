const express =  require('express')
const router = express.Router()

const mongoose = require('../model/mogoose')
const employeesModel = require('../model/employees')
const qualifiedEmployees = require('../model/qualifiedEmployees')


router.post('/',async(req,res)=>{
try {
    const name = req.body.name;
    const emp = new employeesModel({
          name : name
    })
     await emp.save().then((data)=>{
        res.json({employee : data})
    })
} catch (error) {
    res.status(500).json({error:error})
}
})

router.put('/disqualify/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const disqualified = employeesModel.findByIdAndUpdate(id,{qualified:false},{new:true}).exec((err,result)=>{
            if(err){
                res.status(422).json({error:err})
            }
            res.json({data : result})
        })
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.put('/qualified/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const answers  =  req.body.answers;
         await employeesModel.findByIdAndUpdate(id,{
            answers:answers
        },{new:true}).exec((err,result)=>{
            if(err) res.status(422).json({error:err})
            res.status(201).json({data:result})
        })
        const qualified = new qualifiedEmployees({
            qualified : id
        })
        await qualified.save().then((result)=>{
            console.log(result)
        });
    } catch (error) {
        console.log(error);
        res.json({error:error})
    }
})


module.exports = router