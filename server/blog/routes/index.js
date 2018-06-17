var express = require('express');
var router = express.Router();
var articleHttpHandler = require('../module/article_httphandler')

/* GET home page. */
router.route('/admin')
    .get(function (req,res,next) {
        res.render('index.ejs', { title: 'CSSer, 关注Web前端技术！' });
    })

//管理文章信息
router.route('/article/list')
    .get(function(req, res, next) {
        articleHttpHandler.queryList(req, res, next)
    })
    .put(function(req, res, next) {
        articleHttpHandler.addList(req, res, next)
        res.send('add data')
    })
router.route('/article/detail/:id')
    .get(function(req, res, next) {
    	articleHttpHandler.queryArticle(req,res,next)

    })
    .post(function(req, res, next) {

    })
module.exports = router;