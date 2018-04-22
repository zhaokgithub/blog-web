<style>
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
    }
    .left-menu {
        width: 28%;
    }
    .text {
        font-size: 14px;
    }
    .author {
        margin-left: 50px;
        text-align: left;
    }
    aside {
        float: right;
        width: 300px;
        display: block;
        overflow: hidden;
    }
    .article-content{
        border:dashed 1px #EAEAEA;
        word-wrap:break-word;
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
                        <footer style="color:#999;text-align:left;margin:10px;float:left;">
                            <span>{{items.type}}</span>
                            <span><!-- {{items.creatDate}} -->{{curTime}}</span>
                            <i class="fa fa-book"></i>
                            <span>{{items.num}}</span>
                        </footer>
                        <footer style="color:#999;text-align:right;margin-right:15px;">
                             <el-button size="mini" icon="el-icon-edit" circle></el-button>
                             <el-button size="mini" icon="el-icon-delete" circle></el-button>
                        </footer>
                    </article>
                </div>
            </el-col>
            <el-col :span="6">
                <aside>
                    <div class="author">
                        <p>作者相关</p>
                        <p>职位：前端工程师</p>
                        <p>职位：前端工程师</p>
                        <p>职位：前端工程师</p>
                    </div>
                    <div class="author">
                        <p>最新文章</p>
                        <p>职位：前端工程师</p>
                        <p>职位：前端工程师</p>
                        <p>职位：前端工程师</p>
                    </div>
                    <div class="author">
                        <p>联系我</p>
                        <p>职位：前端工程师</p>
                        <p>职位：前端工程师</p>
                        <p>职位：前端工程师</p>
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
                loading:null,
                articleInfoArr: [],
                //dummy
                curTime:''
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
                        console.log(this.articleInfoArr)
                    }
                })
            },
            showArticleContent(obj){
                console.log(obj)
                let articlePath ='/article/'+obj.id
                this.$router.push(articlePath)
            }
        }
    }
</script>
