/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */

let config = {
    db:{
        host:'mongodb://localhost:27017/todo',
    },
    port:4000,

    jwt_secret_key:"zhaokai"
};

module.exports  = config;