const mongoose=require('mongoose');
const {Schema}=mongoose;
const storeSchema=new Schema({
    name:{
        type:String,
    },
    address1:{
        type: String,
    },
    address2:{
        type: String,
    },
    dong:{
        type: String,
    },
})
module.exports=mongoose.model('Store',storeSchema, 'store');

