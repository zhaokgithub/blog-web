<style>
  .el-header {
    min-width: 1200px;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    min-width: 900px;
  }
  body>.el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row style="background:white">
          <el-col :span="8">
            <el-menu mode="horizontal" @select="selectTab" :default-active="activeMenu">
              <el-menu-item index="index">
                首页
              </el-menu-item>
              <el-menu-item index="heatarticle">热门文章</el-menu-item>
              <el-menu-item index="comments">留言评论</el-menu-item>
              <el-menu-item index="about">关于</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="6" :offset="10">
            <el-input placeholder="请输入查询内容" prefix-icon="el-icon-search" style="width:200px;"></el-input>
            <el-dropdown>
              <el-button type="danger" icon="el-icon-check" circle></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>账号设置</el-dropdown-item>
                <el-dropdown-item>我的博客</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="3">
            <div style="margin:1px"></div>
          </el-col>
          <el-col :span="18">
            <router-view/>
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
      </el-main>
      <el-footer>
        Create Time:2018-04-07
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeMenu: 'index'
      }
    },
    mounted: function() {
      this.activeMenu = this.$route.name
      this.queryAllArticle()
    },
    watch: {
      '$route': function(val, oldVal) {
        // this.activeMenu = this.$route.name
      }
    },
    methods: {
      selectTab: function(index, indexPath) {
        let path = (index == 'index') ? '/' : ('/' + index)
        this.$router.push(path);
      },
      queryAllArticle: function() {
        let url = 'static/json/article'
      }
    }
  }
</script>
