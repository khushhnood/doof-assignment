const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('./model/mogoose');
const employeesModel = require('./model/employees');
const qualifiedModel = require('./model/qualifiedEmployees');
const passedRoute = require('./routes/passed')

const employeeRoute = require('./routes/employees')


//const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 4000;


//app.use(cookieParser());
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));
app.use('/passed',passedRoute)
app.use('/employees',employeeRoute)
//app.use(middle);
app.get('/',(req,res)=>{
    res.redirect('/employees');

  
})

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log(`app runnning on port ${PORT}`)
});
