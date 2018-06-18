<template>
    <el-container>
        <el-aside width="200px" style="background-color:#545c64;min-height:900px;">
            <el-menu :default-openeds="['1', '3']" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="switchTab">
                <el-submenu index="admin">
                    <template slot="title"><i class="el-icon-message"></i>文章管理
</template>
          <el-menu-item index="addarticle">添加文章</el-menu-item>
          <el-menu-item index="deletearticle">删除文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container style="padding:10px;">
       <router-view/>
  </el-container>
</el-container>

</template>

<style>
    .el-container {
        height: 100%;
    }
    .el-main {
        padding: 0px;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        color: #333;
    }
</style>

<script>
    import {
        ServerHost
    } from '../../config.js'
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {
            switchTab: function(index, indexPath) {
                console.log(indexPath)
                this.$router.push({
                    name: indexPath[1]
                })
            }
        }
    };
</script>