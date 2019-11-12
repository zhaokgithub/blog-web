/**
 * @Description:
 * @author zhaokai
 * @date 2019/11/9
 */
let express = require('express');
let router = express.Router();
let login_module = require('../../modules/user/login_module');

router.post('/login',function (req,res,next) {
    console.log('login');
    console.log(req.headers);
    login_module.handleLogin(req,res,next);
});

module.exports = router;
