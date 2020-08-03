var express=require("express");

const store = require("../schemas/store");
router=express.Router();
router.use('/:dong', async (req,res,next)=>{
    try{
        const users=await store.findOne().where('dong').in(req.params.dong);
        res.status(200).json(users);
    }
    catch(error){
        console.error(error);;
    }
    
})
module.exports=router;