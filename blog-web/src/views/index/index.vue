<template>
    <div class="article-main-content">
        <div class="article-items-card" v-for="item in articleList" :key="item">
           <ArticleMemoCard :content="item"></ArticleMemoCard>
        </div>
    </div>
</template>

<script>
import ArticleMemoCard from '../../components/tool/ArticleMemoCard';
export default {
    components:{
        ArticleMemoCard
    },
    data(){
        return{
            articleList:[
                {
                    title:'test大大的阿福都 iws ',
                    memo:'狼叔 阅读数：15512019 年 3 月 18 日 时间《技术领导力 300 讲》专栏时间《技术领导力 300 讲》专栏时间《技术领导力 300 讲》专栏本文首发于极客时间《技术领导力 300 讲》专栏。 大家好，我是阿里巴巴前端技术专家狼叔，今天想跟你们分享.'
                },
                {
                    title:'test'
                },
                {
                    title:'test'
                },
                {
                    title:'test'
                },
                {
                    title:'test'
                },
                {
                    title:'test'
                }
            ]

        }
    }
}
</script>
<style lang="less" scoped>
.article-main-content{
    overflow: hidden;
    width: 70%;
    margin:auto;
    .article-items-card{
        // height: 200px;
        min-height: 200px;
        width:100%;
        background: #fff;   
        margin-bottom: 15px;
    }
}
</style>