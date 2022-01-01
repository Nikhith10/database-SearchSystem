const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({

    username :
    {
        type: String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    timestamp: 
    {
         type : Date, default: Date.now() 
    }
    
    


})
module.exports = mongoose.model('Student',studentSchema);