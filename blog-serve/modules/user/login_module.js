/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
const jwtJson = require('jsonwebtoken');

let handleLogin = function(req,res,next){
    res.json('login')
};

module.exports = {
    handleLogin
};