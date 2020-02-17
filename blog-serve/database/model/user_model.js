/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let mongoose = require('../db');

let Schema = mongoose.Schema;
let UserSchema = new Schema({
    user_name : { type: String }, //用户账号
    password: {type: String}, //密码
    sex: {type: Number}, //年龄
    email:{type:String},//邮箱
    head:{type:String},//头像
    role:{type:Number},//角色
    create_time : { type: Date}, //用户创建时间
    author:{type:Number},//authority
    company:{type:String},
    memo:{type:String},
    repository:{type:String},
    article_count:{type:Number},
    followers_count:{type:Number},
    followees_count:{type:Number},
    total_comments_count:{type:Number},
    total_collections_count:{type:Number},
    posted_posts_count:{type:Number},
});

module.exports = mongoose.model('user',UserSchema);