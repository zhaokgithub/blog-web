var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
    title: {type: String, default: 'title'},
    author: {type: String, default: 'zhaokai'},
    create_date: {type: Date, default: new Date()},
    comments: {type: String},
    content: {type: String},
    article_category: {type: Number, default: 0},
    popular_num: {type: Number, default: 0},
    view_num: {type: Number, default: 0},
    is_del: {type:Number, default: 0}
})
module.exports = articleSchema