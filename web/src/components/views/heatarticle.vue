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
        height: 40px;
        text-align: left;
    }
</style>
<template>
    <div class="content-list">
        <el-row>
            <el-col :span="6">
                <div style="margin:1px;"></div>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                    <div slot="header">
                        <h2>热门文章</h2>
                    </div>
                    <div class="article-intro" v-for="item in titleArr">
                        <p>
                            <span>2018-04-25</span>
                            <span><a href="#"><strong>{{item}}</strong></a></span>
                            <span>zhaokai</span>
                        </p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                titleArr: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']
            }
        },
        mounted:function(){},
        methods: {
            queryList(){
                let url = ''
                    this.$axios.get(url).then((res) => {
                    if (res.status == 200) {
                        res.data.forEach(v => {
                            this.titleArr.push(v)
                        });
                        this.loading.close()
                    }
                })

            }
        }
    }
</script>
