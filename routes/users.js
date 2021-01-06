var express=require('express')
var mongoose=require('mongoose')

var Schema=mongoose.Schema;

mongoose.connect('mongodb://localhost/test')

var userSchema=new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String
    }
})

var User=mongoose.model('User',userSchema)

var router=express.Router();

router.get('/users',function(req,res){
    res.send('test')
})

router.get('/users/add',function(req,res){

})

router.get('/users/edit',function(req,res){

})

router.post('/users/edit',function(req,res){

})

router.get('/users/delete',function(req,res){
    
})




module.exports=router