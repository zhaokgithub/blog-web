/*
数据的增删改查以及其他操作
*/
var db = require("../database/db.js")
var article_schema = require('../database/article.js')
var articleModel = db.model('article', article_schema)
//查询所有数据
var queryList = function (req, res, next) {
    var page= !req.query.page ? 1 : req.query.page
    var query = articleModel.find({})
    query.skip((page-1)*50)
    query.limit(50)
    query.exec(function (error,docs) {
        if(error){
            console.log(error)
            return
        }else {
            //计算数据总数
            articleModel.find({},function (error,data) {
                var resultsJson = {page:page,size:50,count:data.length,data:docs}
                res.json(resultsJson)
            })
        }
    })
}
//按参数查询
var filterArticleList= function (req,res,next) {
    var page= !req.query.page ? 1 : req.query.page
    var query = articleModel.find({})
    query.skip((page-1)*50)
    query.limit(50)
    query.exec(function (error,docs) {
        if(error){
            console.log(error)
            return
        }else {
            //计算数据总数
            articleModel.find({},function (error,data) {
                var resultsJson = {page:page,size:50,count:data.length,data:docs}
                res.json(resultsJson)
            })
        }
    })
}
//增加数据
var addList = function (req, res, next) {
    articleModel.create(req.body, function (error, docs) {
        if (error) {
            console.log(error)
            res.end('Error');
            return next();
        } else {
            res.send(docs)
        }
    })
}
//查询单个文章数据
var queryArticle = function (req, res, next) {
    let id = req.params.id
    articleModel.findById({_id: id}, function (error, docs) {
        if (error) {
            console.log(error)
            return
        }
        let results = {status:200,data:docs}
        res.json(results)
    })
}
//修改单个文章数据
var updateArticle = function (req, res, next) {
    let id = req.params.id
    articleModel.findByIdAndUpdate(_id, {$set: req.params}, function (error, docs) {
        if(error){
            console.log(error)
            return
        }
        res.send(docs)
    })
}
//删除某个文章
var deleteArticle = function (req, res, next) {
    let id = req.params.id
    articleModel.findByIdAndRemove({_id: id}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        console.log('删除成功：' + docs);
        res.send(docs)
    })

}

module.exports = {
    queryList: queryList,
    addList: addList,
    queryArticle: queryArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle,
    filterArticleList: filterArticleList
}