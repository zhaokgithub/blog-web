var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
    title: {type : String, default : 'title'},
    author:{type : String, default : 'zhaokai'},
    create_date:{type : Date, default : new Date()},
    comments:{type : Number},
    content:{type : Number},
    popular_num:{type : Number},
    view_num:{type : Number},
})
module.exports = articleSchema