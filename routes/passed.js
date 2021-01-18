const express =  require('express')
const router = express.Router()

const mongoose = require('../model/mogoose')
const employeesModel = require('../model/employees')
const qualifiedEmployees = require('../model/qualifiedEmployees')

router.get('/',async(req,res)=>{
    try {
         await qualifiedEmployees.find({}).populate("qualified","_id name answers").then((result)=>{
            res.status(200).json({employees:result});
        })
    } catch (error) {
        res.status(500).json({error:error})
    }
})

module.exports = router