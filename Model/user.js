const mongoose=require('mongoose')
const Userschema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
   



},{timestamps:true})
module.exports=mongoose.model('crudoperations',Userschema)