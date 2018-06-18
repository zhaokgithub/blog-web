/*
数据的增删改查以及其他操作
*/
var db = require("../database/db.js")
var article_schema = require('../database/article.js')
var articleModel = db.model('article', article_schema)
//查询所有数据
var queryList = function (req, res, next) {
    articleModel.find({}, function (error, docs) {
        if(error){
            console.log(error)
            return
        }
        res.json(docs)
    })
}
//查询单个文章数据
var queryArticle = function (req, res, next) {
    let id = req.params.id
    articleModel.find({_id: id}, function (error, docs) {
        if(error){
            console.log(error)
            return
        }
        res.json(docs)
    })
    res.json({data: {}})
}
//修改单个文章数据
var updateArticle = function (req, res, next) {
    let id = req.params.id

}
//增加数据
var addList = function (req, res, next) {
    console.log(req)
    var mongooseEntity = new articleModel(req.body);
    mongooseEntity.save(function (error) {
        if (error) {
            console.log(error)
           return
        }
        res.json()
    })
}

module.exports = {
    queryList: queryList,
    addList: addList,
    queryArticle: queryArticle,
    updateArticle: updateArticle
}