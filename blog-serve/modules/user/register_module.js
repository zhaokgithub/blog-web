/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
/**
 * @Description:
 * @author zhaokai
 * @date 2019/11/12
 */
let user_model = require('../../database/model/user_model');

let createUserLib = function(req,res,next){
    let userInfo = req.body;
    userInfo.create_time = new Date()
    user_model.create(userInfo,function (err) {
        if(err){
            res.json({success:false});
            return
        }
        res.json({success:true});
    })
};

module.exports = {
    createUserLib:createUserLib,
};