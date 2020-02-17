/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let mongoose = require('../db.js')

let Schema = mongoose.Schema
let ArticleSchema = new Schema({

    collectionCount: { type: Number },
    userRankIndex: { type: Number },
    buildTime: { type: Number },
    commentsCount: { type: Number },
    gfw: { type: Boolean },
    objectId: { type: String },
    checkStatus: { type: Boolean },
    isEvent: { type: Boolean },
    entryView: { type: String },
    subscribersCount: { type: Number },
    ngxCachedTime: { type: Number },
    verifyStatus: { type: Boolean },
    // tags: [{ngxCachedTime: {type:Number}, ngxCached: {type:Boolean},, title: "命令行", id: "5597a2cee4b08a686ce5b7e6",…}],
    updatedAt: { type: Date },
    rankIndex: { type: Number },
    hot: { type: Boolean },
    autoPass: { type: Boolean },
    originalUrl: { type: String },
    verifyCreatedAt: { type: Date },
    createdAt: { type: Date },
    user: { type: String },
    author: { type: String },
    screenshot: { type: String },
    original: { type: Boolean },
    hotIndex: { type: Number },
    content: { type: String },
    title: { type: String },
    lastCommentTime: { type: Date },
    type: { type: String },
    english: { type: Boolean },
    // category: {ngxCached: {type:Boolean},, title: "backend", id: "5562b419e4b00c57d9b94ae2", name: "后端",…},
    viewsCount: { type: Number },
})