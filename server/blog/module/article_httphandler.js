/*
数据的增删改查以及其他操作
*/
var db = require("../database/db.js")
var article_schema= require('../database/article.js')
var articleModel = db.model('article', article_schema)

var queryList = function(req,res,next){
        articleModel.find({},function(error,docs){
        	console.log('test')
        	res.send(docs);
        })

}
var addList = function(req,res,next){
	var mongooseEntity = new articleModel({});
        mongooseEntity.save(function(error) {
            if (error) {
                console.log(error);
            } else {
                console.log('saved OK!');
            }
        });
        console.log(JSON.stringify(req))
        res.send('iii')
}
module.exports = {
	queryList: queryList,
	addList: addList
}