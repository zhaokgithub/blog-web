/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
const jwtJson = require('jsonwebtoken');
let Util = require('../../lib/utils');
let Config = require('../../lib/config');

let handleLogin = function (req, res, next) {
    let user = {
        name:"zhaokai",
        pwd:'123456'
    };
    let token = jwtJson.sign(user, Config.jwt_secret_key, {
        expiresIn: 60 * 60 * 24// 授权时效24小时
    });
    let obj ={
        token : token
    };
    res.json(Util.formatNormalRes(obj))
};

module.exports = {
    handleLogin
};