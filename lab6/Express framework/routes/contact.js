var express=require('express');
var router=express.Router();
var fs=require('fs');

router.post('/contactus',function(req,res,next){           

   req.assert('fullname',"full name is required.").notEmpty();
   req.assert('message','message is required.').notEmpty();
   var errors=req.validationErrors();
            if(!errors){
                    var data=req.body;
                    data.ipaddress=req.ip;
                    // res.locals.username=req.body.fullname;
                    // console.log('username-----'+username);
                var textdata="";
                for(var index in data){
                    textdata+=index+": "+data[index]+"\n";
                }
                textdata+="\n\n";

                
                fs.appendFile('../data.txt',textdata,function(err){
                    //  res.locals.username=req.body.fullname;
                    // console.log('username-----'+res.locals.username);
                    next(err);
                });



                res.redirect('/thankyou');
            }
            else{
               
                res.locals.errmessage='Invalid input fields!';
                res.render("index");
            }



 
});

module.exports=router;