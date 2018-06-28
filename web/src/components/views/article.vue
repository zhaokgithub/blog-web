<style>
    .article {
        height: 800px;
        min-width: 900px;
        min-height: 900px;
        height: 100%;
        width: 100%;
        float: left;
        padding: 10px;
        background: #fff;
        text-align: center;
        z-index: 9999;
        border-radius: 10px;
        box-shadow: 0 16px 24px 1px rgba(0, 0, 0, .14), 0 6px 50px 1px rgba(0, 0, 0, .12), 0 6px 10px -5px rgba(0, 0, 0, .2);
    }
</style>
<template>
    <div class="article">
        <article>
            <h2>{{articleInfo.title}}</h2>
            <div style="text-align:right;padding:5px;">{{articleInfo.author}}</div>
            <section>{{articleInfo.content}}</section>
        </article>
    </div>
</template>
<script>
    import {
        ServerHost
    } from '../../config.js'
    export default {
        data() {
            return {
                articleInfo: {}
            }
        },
        created: function() {
            this.queryArticleIntro()
        },
        methods: {
            queryArticleIntro() {
                let url = `${ServerHost}/article/detail/${this.$route.query.id}/`
                this.$axios.get(url).then((res) => {
                    if (res.status > 199 && res.status < 300) {
                        debugger
                        this.articleInfo = res.data.data
                        this.loading.close()
                    } else {
                        console.log(res)
                    }
                }).catch(function(err) {
                    console.log(err)
                })
            },
        }
    }
</script>