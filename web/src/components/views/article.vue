<style>
  .content-list {
        height: 800px;
        min-width: 900px;
    }
</style>
<template>
    <div class="content-list">
      ddd
    </div>
</template>
<script>
import {ServerHost} from '../../config.js'
    export default {
        data(){
            return {
                articleInfo: {}
            }
        },
        created:function(){
            this.queryArticleIntro()
        },
        methods:{
            queryArticleIntro() {
                let url = `${ServerHost}/article/detail/${this.$route.query.id}/`
                this.$axios.get(url).then((res) => {
                    if (res.status > 199 && res.status < 300) {
                        this.articleInfo = res.data
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