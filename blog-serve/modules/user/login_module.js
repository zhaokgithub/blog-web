/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */

let handleLogin = function(req,res,next){
    console.log('test');
    console.log(req.body);
    res.json('login')
};

module.exports = {
    handleLogin
};