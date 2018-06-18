<template>
    <el-container>
        <el-aside width="200px" style="background-color:#545c64;min-height:900px;">
            <el-menu :default-openeds="['admin']" :default-active="activeMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="switchTab">
                <el-submenu index="admin">
                    <span slot="title"><i class="el-icon-edit-outline"></i>文章管理</span>
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
            return {
                activeMenu: 'addarticle'
            }
        },
        watch:{
            '$route':function(val,oldVal){
                 this.activeMenu = this.$route.name
            }
        },
        created: function() {
            this.activeMenu = this.$route.name
        },
        methods: {
            switchTab: function(index, indexPath) {
                this.$router.push({
                    name: indexPath[1]
                })
            }
        }
    };
</script>