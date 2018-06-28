<template>
    <div style="height:100%;overflow:auto">
        <el-table :data="tableData" style="width: 100%" border stripe width="1200">
            <el-table-column prop="title" label="标题" width="280">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="80">
            </el-table-column>
            <el-table-column prop="create_date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="popular_num" label="点赞数">
            </el-table-column>
            <el-table-column prop="view_num" label="浏览数">
            </el-table-column>
            <el-table-column prop="article_category" label="类别">
            </el-table-column>
            <el-table-column prop="comments" label="评论" width="280">
            </el-table-column>
            <el-table-column prop="info" label="简介" minWidth="480">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="modifyArticle(scope.row)" type="text" size="small">修改</el-button>
</template>
    </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import {
        ServerHost
    } from '../../config.js'
    export default {
        data() {
            return {
                tableData: []
            }
        },
        created: function() {
            this.queryList()
        },
        methods: {
            queryList: function() {
                this.tableData = []
                let url = `${ServerHost}/article/list/`
                this.$axios.get(url).then((response) => {
                    if (response.status == 200) {
                        response.data.data.forEach(v => {
                            v.info = !v.content ? '' : v.content.slice(0, 100)
                            this.tableData.push(v)
                        })
                    }
                })
            },
            modifyArticle: function(params) {
                let url = `${ServerHost}/article/detail/${params._id}/`
                this.$axios.delete(url).then((response)=>{
                    if(response.status == 200){
                        this.queryList()
                    }
                })
            }
        },
    }
</script>
