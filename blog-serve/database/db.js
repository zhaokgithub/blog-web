/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let mongoose = require('mongoose');
let config = require('../lib/config');

mongoose.connect(config.db.host);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('connected',function (err) {
    if(err){
        console.log(err)
    }else {
        console.log('mongodb starting success!')
    }
});

module.exports = mongoose