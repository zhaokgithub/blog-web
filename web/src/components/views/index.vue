<style>
a {
    list-style: none;
    text-decoration: none;
    color: #888888;
}

a:hover {
    color: rgb(83, 83, 216);
}

.content-list {
    height: 800px;
    min-width: 900px;
}

.article-info {
    min-height: 900px;
    height: 100%;
    width: 100%;
    float: left;
    padding: 10px;
    background: #fff;
    text-align: left;
    z-index: 9999;
    border-radius: 10px;
    box-shadow: 0 16px 24px 1px rgba(0, 0, 0, .14), 0 6px 50px 1px rgba(0, 0, 0, .12), 0 6px 10px -5px rgba(0, 0, 0, .2);
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
    text-align: left;
    background: #fff;
    box-sizing: border-box;
    border-radius: 20px;
}

.artile-hot {
    /* margin-top: 50px; */
    text-align: left;
    margin-top: 10px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 20px;
}

.article-content {
    min-height: 250px;
    padding: 15px 15px 0px 15px;
    border-bottom: solid 1px #EAEAEA;
    word-wrap: break-word;
    cursor: pointer;
}

.ui.red.ribbon.label {
    border-color: #47456d;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

.ui.red.label,
.ui.red.labels .label {
    background-color: #97dffd;
    border-color: #97dffd;
    color: #fff;
    margin: 5px 0 15px 2px;
    font-size: 14px;
}

.ui.ribbon.label {
    position: relative;
    margin: 0 .2em;
    left: -3.3rem;
    padding-left: 2rem;
    border-radius: 0 4px 4px 0;
    border-color: rgba(0, 0, 0, .15);
}

.ui.label:last-child {
    margin-right: 0;
}

.ui.ribbon.label {
    margin-top: 15px;
    margin-bottom: 5px;
}

.ui.label {
    display: inline-block;
    padding: .5em .8em;
}

.ui.ribbon.label:after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    border-top: 0 solid transparent;
    border-right-width: 1em;
    border-right-color: inherit;
    border-right-style: solid;
    border-bottom: 1em solid transparent;
    border-left: 0 solid transparent;
    width: 0;
    height: 0;
}

.ui.label a {
    color: inherit;
}
</style>

<template>
<div>
    <el-row>
        <el-col :span="18">
            <div class="article-info">
                <article v-for="items in articleInfoArr" :key="items.curTime" class="article-content">
                    <h3 style="border-bottom:solid 1px #F0FFFF;text-align:center;line-height: 1.1;font-size: 1.6em;margin:0px;" @click="showArticleContent(items)">{{items.title}}</h3>
                    <div style="color:gray;text-align:right;font-size: 14px;">
                        <span><i class="el-icon-time"></i>2017-12-05 21:56:03</span>
                        <span><i class="el-icon-service">作者:{{items.author}}</i></span>
                    </div>
                    <div class="ui ribbon label red">
                        <a >手机测试</a>
                    </div>
                    <section style="color:#999;font-size:14px;min-height:180px;width:98%;">{{items.info}}</section>
                    <div style="color:#999;right;text-align:right;padding-right:20px;">
                        <el-button type="primary" size="small" style="width:90px;color:#fff;background-color:#96e1fc;border-color:#96e1fc;margin-bottom:5px;" @click="showArticleContent(items)"><span @mouseout="isShow = false" @mouseenter="isShow = true">阅读全文</span><i v-show="isShow" class="el-icon-d-arrow-right el-icon--right"></i></el-button>
                    </div>
                </article>
            </div>
        </el-col>
        <el-col :span="6" style="padding-left:50px;margin-top:80px;">
            <div class="artile-tag">
                <p style="border-bottom: solid 1px #E5E5E5;padding:5px;">推荐文章</p>
                <div style="height:100%;min-height:150px;padding-left:10px;">
                    <p style="margin:5px;" v-for="item in articleCategory" :key="item">
                        <span><a href="#" target="_blank">{{item}}</a></span>
                    </p>
                </div>
            </div>
            <div class="artile-hot">
                <p style="border-bottom: solid 1px #E5E5E5;padding:5px;">文章分类</p>
                <div style="height:100%;min-height:150px;padding-left:10px;">
                    <div v-for="item in articleHot" :key="item">
                        <p style="margin-top:5px;"><a href="#" target="_blank">{{item}}(15)</a></p>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import {
    ServerHost
} from '../../config.js'
export default {
    data() {
        return {
            isShow: false,
            loading: null,
            articleInfoArr: [],
            //dummy
            curTime: '',
            articleCategory: [
                "手机测试", "javascript原理", 'java开发'
            ],
            articleHot: [
                "javascript原型分析",
                "javascript闭包理解",
                "javascript测试",
                "额问题为",
            ]
        }
    },
    mounted: function() {
        this.queryArticleIntro()
        this.$isBlank()
        this.curTime = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
        this.loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    },
    methods: {
        switchTab: function(name) {},
        showIcon: function() {
            debugger

        },
        queryArticleIntro() {
            // this.loading.close()//沒有使用server端不注釋
            let url = `${ServerHost}/article/list/`
            this.$axios.get(url).then((res) => {
                if (res.status > 199 && res.status < 300) {
                    this.loading.close()
                    res.data.data.forEach(v => {
                        v.info = v.content.slice(0,400)
                        this.articleInfoArr.push(v)
                    });
                } else {
                    console.log(res)
                }
            }).catch(function(err) {
                console.log(err)
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
