var express = require('express');
var router = express.Router();
var db = require("../database/db.js")
var article_schema= require('../database/article.js')

var doc = { author: 'emtity_demo_usernames', title: 'emtity_demo_titlesss' };

/* GET home page. */
router.route('/article/list').get(function(req, res) {
        var articleModel = db.model('article', article_schema)
        articleModel.find({},function(error,docs){
        	res.send(docs);
        })
        var mongooseEntity = new articleModel(doc);
        mongooseEntity.save(function(error) {
            if (error) {
                console.log(error);
            } else {
                console.log('saved OK!');
            }
            // 关闭数据库链接
            // mongoose.close();
        });

        res.send('respond with a resource');
    })
    .put(function(req, res) {
        res.send('add data')
    })

module.exports = router;