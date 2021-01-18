const mongoose =  require('mongoose')
const schema =  mongoose.Schema;



const qualifiedSchema = new schema({
   
    qualified :{type : mongoose.Schema.Types.ObjectId, ref : "employees" }
    
},{timestamps:true})

const qualified = mongoose.model("qualified",qualifiedSchema);
module.exports = qualified;