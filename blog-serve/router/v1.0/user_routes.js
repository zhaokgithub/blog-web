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

router.get('/list',function (req,res,next) {
    console.log('user list');
});

router.get('/detail/:user_id',function (req,res,next) {
    console.log('user detail');
});

router.put('/detail/:user_id',function (req,res,next) {
    
});

router.delete('/delete/:user_id',function (req,res,next) {

});

module.exports = router;
