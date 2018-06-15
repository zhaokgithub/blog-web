var express = require('express');
var router = express.Router();
var articleHttpHandler = require('../module/article_httphandler')

/* GET home page. */
router.route('/article/list')
    .get(function(req, res, next) {
        articleHttpHandler.queryList(req, res, next)
    })
    .put(function(req, res,next) {
        articleHttpHandler.addList(req, res, next)
        res.send('add data')
    })

module.exports = router;