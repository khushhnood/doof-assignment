const mongoose  = require('mongoose')
const schema = mongoose.Schema;


const employeesSchema = new schema({
    name : {
        type : String,
        required: true
    },
   
    
    qulaified : {
         type : Boolean,
         default : true
    },
    answers : {text: String },
  
   
},{collection:'employees'});

var employees = mongoose.model('employees',employeesSchema);
module.exports = employees;
