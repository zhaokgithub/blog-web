<style>
    a {
        list-style: none;
        text-decoration: none;
    }
    .content-list {
        height: 800px;
        min-width: 900px;
        width: 100%;
    }
    .box-card {
        width: 100%;
    }
    .el-card__header {
        padding: 0px;
    }
    .article-intro {
        border-bottom: solid 1px #ebeef5;
        height: 100%;
        padding: 20px 10px 10px 10px;
        text-align: left;
    }
    .article-intro:hover {
        background: #F8F8FF;
    }
</style>
<template>
    <div class="content-list">
        <el-row>
            <el-col :span="2">
                <div style="margin:1px;"></div>
            </el-col>
            <el-col :span="20">
                <el-card class="box-card">
                    <div slot="header">
                        <h2 style="text-align:center;">热门文章</h2>
                    </div>
                    <div class="article-intro" v-for="item in titleArr" :key="item._id" @click="showArticleContent(item)">
                        <span><strong>标题：{{item.title}}</strong></span>
                        <p style="text-align:right;">
                            <span>作者:{{item.author}}</span>
                            <span>创建时间:{{item.create_date}}</span>
                        </p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="2"></el-col>
        </el-row>
    </div>
</template>
<script>
    import {
        ServerHost
    } from '../../config.js'
    export default {
        data() {
            return {
                titleArr: [],
                loading: null
            }
        },
        mounted: function() {
            this.loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            this.queryList()
        },
        methods: {
            queryList() {
                let url = `${ServerHost}/article/list/`
                this.$axios.get(url).then((res) => {
                    if (res.status == 200) {
                        if(res.data.data.length == 0){
                            return
                        }
                        res.data.data.forEach(v => {
                            let date = new Date(v.create_date)
                            v.create_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
                            this.titleArr.push(v)
                        });
                        this.titleArr.sort(function(a,b){
                            return b.popular_num - a.popular_num
                        })
                        this.titleArr = this.titleArr.slice(0,10)
                        this.loading.close()
                    }
                })
            },
            showArticleContent(obj) {
                this.$router.push({
                    path: 'article/detail/',
                    query: {
                        id: obj._id
                    }
                })
            },
        }
    }
</script>
