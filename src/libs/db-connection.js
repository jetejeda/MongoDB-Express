const mongoose = require('mongoose');
let db;

module.exports = function Connection(){
    if(!db){
        try {
            db = mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true
            },(err)=>{
                if(err) console.log(err)
                else console.log("Connected")
            });
        } catch (error) {
            console.log(error);
        }
    }
    return db;
};