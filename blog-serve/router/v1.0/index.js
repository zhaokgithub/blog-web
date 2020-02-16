/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */

let express = require('express');

let app = express();
let router = express.Router();
let user_routes = require('./user_routes');


router.use('/user',user_routes);

module.exports = router;