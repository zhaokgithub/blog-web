var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myweb";

function $connectDb(callbackFun) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw {
            callbackFun(err,db)
        }
        console.log("数据库已创建!");
        callbackFun(err,db)
        db.close();
    });
}