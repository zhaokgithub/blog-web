/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let mongoose = require('../db');

Schema = mongoose.Schema;
let UserSchema = new Schema({
    user_name : { type: String }, //用户账号
    password: {type: String}, //密码
    sex: {type: Number}, //年龄
    email:{type:String},//邮箱
    head:{type:String},//头像
    role:{type:Number},//角色
    create_time : { type: Date} //最近登录时间
});

module.exports = mongoose.model('user',UserSchema);