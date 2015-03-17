var mongoose = require('mongoose')
var Article = require('../models/article')
var Category = require('../models/category')

exports.new = function(req, res){
  Category.find({},function(err, categories){
    res.render('article_admin',{
    title:'文章后台录入',
    article:{},
    categories:categories
    })
 })
}

exports.save = function(req,res){
  
}

exports.list = function(req, res){
  Article.find({})
   .populate('category', 'name')
   .exec(function(err, articles){
     if(err){
       console.log(err)
     }
     res.render('list',{
       title:'文章列表',
       articles:articles
     })
   }) 
}

exports.del = function(req,res){
  var id = req.query.id
  if(id) {
    Article.remove({_id:id},function(err,article){
     if(err){
       console.log(err)
       res.json({success:0})
     }
     else {
       res.json({success:1})
     }
    })
  }
}

