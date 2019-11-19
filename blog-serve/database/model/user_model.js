/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let mongoose = require('../db');

Schema = mongoose.Schema;
var UserSchema = new Schema({
    username : { type: String }, //用户账号
    userpwd: {type: String}, //密码
    userage: {type: Number}, //年龄
    logindate : { type: Date} //最近登录时间
});

module.exports = mongoose.model('');