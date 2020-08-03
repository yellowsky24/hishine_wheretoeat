var express=require("express");
router=express.Router();
router.get('/',(req,res,next)=>{
    res.render('main');
})


module.exports=router;