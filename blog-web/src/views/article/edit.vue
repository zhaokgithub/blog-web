<template>
  <div class="article-edit-body">
    <header>
      <el-input placeholder="输入文章标题..." v-model="title"></el-input>
      <div class="article-edit-header-right">
        <!-- <span style="color:#999;">文章将会自动保存至草稿</span> -->
        <el-button @click="handlerSave" type="primary" size="small" style="margin-left:15px;cursor:pointer;width:100px;font-size:16px;">发布文章</el-button>
      </div>
    </header>
    <content>
      <mavon-editor v-model="content" />
    </content>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      content: "test",
      title: ""
    };
  },
  methods:{
      handlerSave:function(){
          console.log(this.content)
      }
  }
};
</script>
<style lang="less" scoped>
.article-edit-body {
  height: 100%;
  overflow: hidden;
  header {
    display: flex;
    min-height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px 0px 15px;
    /deep/ .el-input {
      width: 70%;
    }
    /deep/ .el-input__inner {
      color:#000;
      font-weight: bold !important;
      border: none !important;
      font-size: 20px;
    }
    .article-edit-header-right {
      flex: 1;
      text-align: right;    
      min-width: 300px;
    }
  }
  content {
    height: calc(100% - 80px);
    div {
      height: calc(100% - 80px);
    }
  }
}
</style>