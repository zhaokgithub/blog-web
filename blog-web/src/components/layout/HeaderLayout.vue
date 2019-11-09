<template>
  <div class="header">
    <div class="header-content">
      <h1>文章分享</h1>
      <ul @click="handlerNavTab">
        <li title="“home”">首页</li>
        <li title="category">分类</li>
        <li>留言</li>
      </ul>
    </div>
    <div class="header-action">
      <div>搜索</div>
      <div>
        <el-button type="primary" size="small" icon="el-icon-edit">写文章</el-button>
      </div>
      <div>通知</div>
      <div>登录</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handlerNavTab(e) {
      console.log("dddd");
      console.log(e);
    }
  }
};
</script>
<style>
.header {
  width: 60%;
  padding: 0px 20% !important;
  margin: auto;
  height: 60px;
  background: #fff;
  display: flex;
  padding: 0px 0px 0px 25px;
  align-items: center;
  justify-content: space-between;
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