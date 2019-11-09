/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let mongoose = require('mongoose');
let config = require('../lib/config');

mongoose.connect('mongodb://localhost/test');
let db = mongoose.connection;

db.on('connection',function (err) {

});