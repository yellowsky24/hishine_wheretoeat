var express=require("express");
const change=require("./practice")

//const googleMaps=require('@google/maps');
//const store = require("../schemas/store");
router=express.Router();
router.use('/:dong', async (req,res,next)=>{
    try{
       
        var string=req.params.dong;
        var number=string.split(',');
        
        var result=await change(number);
        console.log(result[0].name);
        /*const num=await store.countDocuments({dong: req.params.dong});
        var random=Math.floor(Math.random()*num);
        const users=await store.findOne().skip(random).where('dong').in(req.params.dong);
        console.log(users);*/
        //여기서 users가 주어지면 이제 해당 users을 이용해 naver maps api호출.
        //여기서 naver geolocation을 통해서 좌표대신 주소를 이용해야 한다. 
       
        res.status(200).json(result);


    }
    catch(error){
        console.error(error);;
    }
    
})
module.exports=router;