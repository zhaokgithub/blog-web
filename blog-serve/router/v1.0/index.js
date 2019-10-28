/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */

let express = require('express');
let router = express.Router();

router.get('/test',function (req,res,next) {
    console.log('test')
    res.json('test')
});

module.exports = router;

