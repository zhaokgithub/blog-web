<template>
  <div class="header">
    <div class="header-content">
      <h1>文章分享</h1>
      <ul @click="handlerNavTab">
        <li title="/home">首页</li>
        <li>留言</li>
      </ul>
    </div>
    <div class="header-action">
      <div>
        <el-input placeholder="请输入内容" size="small" v-model="searchContent" style="width:150px">
          <i slot="append" class="el-icon-search" style="width:20px"></i>
        </el-input>
      </div>
      <div>
        <el-button type="primary" size="small" icon="el-icon-edit" @click="writeArticle">写文章</el-button>
      </div>
      <div>通知</div>
      <span class="header-action-login">登录</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchContent:'test'
    };
  },
  methods: {
    handlerNavTab(e) {
      let path = e.target.title;
      this.$router.push(path);
    },
    writeArticle() {
      this.$router.push("/edit/article");
    }
  }
};
</script>
<style lang="less" scoped>

</style>
<style lang="less">
.header {
  width: 68%;
  padding: 0px 16% !important;
  margin: auto;
  height: 60px;
  background: #fff;
  display: flex;
  padding: 0px 0px 0px 25px;
  align-items: center;
  justify-content: space-between;
  .header-action-login{
    cursor: pointer;
    &:hover{
      color:#409EFF;
    }
  }
}
.el-input-group__append{
  padding:0px 5px !important;
}
.header-content,
.header-action {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.header-action div {
  margin-right: 25px;
}
.header ul {
  padding: 0px;
  margin: 0px;
  line-height: 60px;
  margin-left: 25px;
}
.header li {
  cursor: pointer;
  list-style: none;
  float: left;
  width: 60px;
}
.header li:hover {
  color: #007fff;
}
</style>