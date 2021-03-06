var express = require('express');
var router = express.Router();
var Students=require('../model/students');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addStudent',function(req,res){
  var data;
  if(req.body.name==''){
    //console.log(req.body.Name);
    data={
      'errorcode':1,
      'message':"Name filed cannot be Empty"
    }
    res.json(data);
  }
  else if(req.body.lastName==''){
    //console.log(req.body.Name);
    data={
      'errorcode':1,
      'message':"Last Name cannot be Empty"
    }
    res.json(data);
  }
   else if(req.body.studentId==''){
   // console.log(req.body.Name);
    data={
      'errorcode':1,
      'message':"Student Id cannot be Empty"
    }
    res.json(data);
  }
   else if(req.body.phone==''){
    //console.log(req.body.Name);
    data={
      'errorcode':1,
      'message':"Phone cannot be Empty"
    }
    res.json(data);
  }
   else if(req.body.address==''){
   // console.log(req.body.Name);
    data={
      'errorcode':1,
      'message':"Address cannot be Empty"
    }
    res.json(data);
  }
  else{
    Students.addData(req.body,function(err,cb){
      console.log(err);
      if(err){
         data={
      'errorcode':1,
      'message':"Something went wrong please try again"
    }
    res.json(data);
      }
    else{
       data={
      'errorcode':1,
      'message':"Added Successfully"
    }
    res.json(data);
      }
    })
  }
});




 router.get('/getStudent/:_id',function(req,res){



      var studentId=req.params._id;

      console.log(studentId);


     Students.getStudentData(studentId, function (err, user) {
        if (err) {
            res.json({ "errorcode": 0 });
        }
        else {
            
            res.json(user)
        }

    });

    });


  router.get('/deleteStudent/:_id',function(req,res){



      var studentId=req.params._id;

      console.log(studentId);


     Students.deleteStudentData(studentId, function (err, user) {
        if (err) {
            res.json({ "errorcode": 0 })
        }
        else {
            
            res.json(user)
        }

    });

    });

module.exports = router;
