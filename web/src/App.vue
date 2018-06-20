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
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    color: #333;
    text-align: center;
    min-width: 900px;
    min-height: 900px;
    height: 100%;
  }
  body>.el-container {
    margin-bottom: 40px;
    height: 1200px !important;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  #header {
    background-image: url('../static/img/banner2.jpg');
    height: 250px;
    background-size: cover;
    position: relative;
  }
</style>

<template>
  <div id="app">
    <el-container v-show="isShowMenu">
      <div id="header">
        <el-row>
          <el-col :span="24">
            <el-menu mode="horizontal" @select="selectTab" :default-active="activeMenu" style="opacity:0.7;padding-left:200px;margin:0px;">
              <el-menu-item index="index">
                首页
              </el-menu-item>
              <el-menu-item index="heatarticle">热门文章</el-menu-item>
              <el-menu-item index="comments">留言评论</el-menu-item>
              <el-menu-item index="about">关于</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <el-main style="margin-top:-90px;border-radius:50px;">
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
    <div v-show="!isShowMenu" :style="{height:height}">
        <router-view/>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        height:'100%',
        activeMenu: 'index',
        isShowMenu: true
      }
    },
    created: function() {
      this.activeMenu = this.$route.name
      this.isShowMenu = (this.$route.path.indexOf('admin') > -1) || (this.$route.path.indexOf('login') > -1) ? false : true
      this.queryAllArticle()
    },
    watch: {
      '$route': function(val, oldVal) {
        this.activeMenu = this.$route.name
        this.isShowMenu = (val.path.indexOf('admin') > -1) || (val.path.indexOf('login') > -1) ? false : true
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
