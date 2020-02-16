/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
const jwtJson = require('jsonwebtoken');
let Util = require('../../lib/utils');
let Config = require('../../lib/config');
let user_model = require('../../database/model/user_model');

let handleLogin = function (req, res, next) {
    user_model.find({user_name: req.body.user_name},function(err,result){
        if(err){
            console.log(err);
            res.json(err);
            return
        }
        console.log(result);
        let token = jwtJson.sign(user, Config.jwt_secret_key, {
            expiresIn: 60 * 60 * 24// 授权时效24小时
        });
        let obj ={
            token : token
        };
        res.json(Util.formatNormalRes(obj))
    });

};

module.exports = {
    handleLogin
};