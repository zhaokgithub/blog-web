<style>
    a{
        list-style: none;
        text-decoration: none;
        color: #888888;
    }
    a:hover{
        color: rgb(83, 83, 216);
    }
    .content-list {
        height: 800px;
        min-width: 900px;
    }
    .article-info {
        height: 100%;
        width: 100%;
        float: left;
        background: #fff;
        text-align: left;
        text-indent: 2em;
    }
    .left-menu {
        width: 28%;
    }
    .text {
        font-size: 14px;
    }
    .artile-author {
        text-align: left;
        background: #fff;
        box-sizing: border-box;
        border: solid 1px #F0FFFF;
        box-shadow: 10px 0px 5px #888888;
    }
    .artile-tag {
        margin-top: 50px;
        text-align: left;
        background: #fff;
        box-sizing: border-box;
        border: solid 1px #F0FFFF;
        box-shadow: 10px 0px 5px #888888;
    }
    .artile-hot {
        margin-top: 50px;
        text-align: left;
        background: #fff;
        box-sizing: border-box;
        border: solid 1px #F0FFFF;
        box-shadow: 10px 0px 5px #888888;
    }
    aside {
        float: right;
        width: 300px;
        display: block;
        overflow: hidden;
         color: #888888;
    }
    .article-content {
        border: dashed 1px #EAEAEA;
        word-wrap: break-word;
        cursor: pointer;
    }
</style>

<template>
    <div class="content-list">
        <el-row>
            <el-col :span="18">
                <div class="article-info">
                    <article v-for="items in articleInfoArr" :key="items.title" class="article-content">
                        <h3 style="border-bottom:solid 1px #F0FFFF;" @click="showArticleContent(items)">{{items.title}}</h3>
                        <section style="color:#999" @click="showArticleContent(items)">{{items.info}}</section>
                        <footer style="color:#999;text-align:left;margin:10px;float:left;text-indent:0em;">
                            <span>{{items.type}}</span>
                            <span><!-- {{items.creatDate}} -->{{curTime}}</span>
                            <i class="fa fa-book"></i>
                            <span>{{items.num}}</span>
                        </footer>
                        <footer style="color:#999;text-align:right;margin-right:15px;">
                            <el-button size="mini" icon="el-icon-edit" circle></el-button>
                            <el-button size="mini" icon="el-icon-delete" circle @click="deleteArtile"></el-button>
                        </footer>
                    </article>
                </div>
            </el-col>
            <el-col :span="6">
                <aside>
                    <div class="artile-author">
                        <p style="border-bottom: solid 1px #E5E5E5;"><i class="fa fa-circle" style="font-size:24px;color:blue;"></i>作者名</p>
                        <div style="border-bottom: solid 1px #E5E5E5;padding:5px;">
                            <span style="margin-left:15px;">喜欢</span>
                            <span style="margin-left:15px;">评论</span>
                            <span style="margin-left:15px;">作者</span>
                        </div>
                        <p>文章存档</p>
                    </div>
                    <div class="artile-tag">
                        <p style="border-bottom: solid 1px #E5E5E5;padding:5px;">文章分类</p>
                        <div style="border-bottom: solid 1px #E5E5E5;height:100%;min-height:150px;">
                            <p style="margin:5px;" v-for="item in articleCategory" :key="item">
                                <span><a href="#" target="_blank">{{item}}</a></span>
                                <span style="float:right;">15</span>
                            </p>
                        </div>
                    </div>
                    <div class="artile-hot">
                        <p style="border-bottom: solid 1px #E5E5E5;padding:5px;">热门文章</p>
                        <div style="border-bottom: solid 1px #E5E5E5;height:100%;min-height:150px;">
                            <div  v-for="item in articleHot" :key="item">
                                <p style="margin-top:5px;"><a href="#" target="_blank">{{item}}</a></p>
                                <i class="fa fa-book" ></i>
                                <span >15</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: null,
                articleInfoArr: [],
                //dummy
                curTime: '',
                articleCategory:[
                    "手机测试","javascript原理",'java开发'
                ],
                articleHot:[
                    "javascript原型分析",
                    "javascript闭包理解",
                    "javascript测试",
                    "额问题为",
                ]
            }
        },
        mounted: function() {
            this.queryArticleIntro()
            this.curTime = moment(new Date()).format("YYYY MM DD hh:mm:ss")
            this.loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
        },
        methods: {
            switchTab: function(name) {},
            queryArticleIntro() {
                //test
                let url = '/static/json/article.json'
                this.$axios.get(url).then((res) => {
                    if (res.status == 200) {
                        res.data.forEach(v => {
                            this.articleInfoArr.push(v)
                        });
                        this.loading.close()
                    }
                })
            },
            showArticleContent(obj) {
                let articlePath = '/article/' + obj.id
                this.$router.push(articlePath)
            },
            deleteArtile() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '执行中...';
                            let url = ''
                            this.$axios.get(url).then((res) => {
                                if (res.status == 200) {
                                    this.articleInfoArr = [],
                                        done()
                                }
                            })
                        } else {
                            done();
                        }
                    }
                }).then((res) => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            executeEditArticle() {
                //判断是否登录登录的话跳转到编辑页面
            }
        }
    }
</script>
