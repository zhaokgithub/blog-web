<style>
 .article-info {
        min-height: 900px;
        height: 100%;
        width: 100%;
        float: left;
        padding: 10px;
        background: #fff;
        text-align: left;
        text-indent: 2em;
        z-index: 9999;
        border-radius: 10px;
        box-shadow:0 16px 24px 1px rgba(0,0,0,.14), 0 6px 50px 1px rgba(0,0,0,.12), 0 6px 10px -5px rgba(0,0,0,.2);
    }
</style>

<template>
    <div class="article-info">
        <article v-for="items in articleInfoArr" :key="items.title" class="article-content">
            <h3 style="border-bottom:solid 1px #F0FFFF;text-align:center;line-height: 1.1;font-size: 1.6em;" @click="showArticleContent(items)">{{items.title}}test</h3>
            <!--<section style="color:#999;font-size:14px;" @click="showArticleContent(items)">{{items.info}}</section>
                            <footer style="color:#999;text-align:left;margin:10px;float:left;text-indent:0em;">
                                <span>{{items.type}}</span>
                                <span>{{curTime}}</span>
                                <i class="fa fa-book"></i>
                                <span>{{items.num}}</span>
                            </footer>
                            <footer style="color:#999;text-align:right;margin-right:15px;">
                                <el-button size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button size="mini" icon="el-icon-delete" circle @click="deleteArtile"></el-button>
                            </footer> -->
        </article>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        props:{
            articleInfoArr:{
                type: Array,
            }
        }
    }
</script>