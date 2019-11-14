/**
 * @Description:
 * @author zhaokai
 * @date 2019/11/14
 */
let jwt= require('express-jwt');
let Config = require('./config');

const secretKey = Config.jwt_secret_key;
const validRoutes = ["/api/v1.0/user/login", "/api/v1.0/user/register"];
const jwtAuth = jwt({secret: secretKey}).unless({path: validRoutes});

module.exports = jwtAuth;