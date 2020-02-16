<template>
  <div class="article-card">
    <h1 style="font-size:30px">{{content.title}}</h1>
    <p class="article-card-nav">
      <span>时间</span>
 •
      <span>作者</span>
 •
      <span>条评论</span>
 •
      <span>次浏览</span>
    </p>
    <div class="article-card-memo">{{content.memo?content.memo:'文章简介'}}</div>
    <p style="text-align:right">
      <span class="article-detail-link" @click="showDetail">继续阅读 »</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
      showDetail(item){
          let id = item
          this.$router.push('/article/detail')
      }
  }
};
</script>
<style lang="less" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  .article-card-memo{
      height: 100%;
      min-height: 30px;
      text-align: left;
      font-size: 14px;
      line-height: 30px;
  }
  p {
    height: 30px;
    margin: 0px;
    width: 100%;
    line-height: 30px;
    text-align: left;
    .article-detail-link {
      color: #409eff;
      cursor: pointer;
      font-size: 14px;
    }
  }
  .article-card-nav {
    color: #aaa;
    line-height: 30px;
    span {
      margin-right: 15px;
    }
  }
  h1 {
    color: #444444;
    font-family: inherit;
    font-weight: 400;
    height: 30px;
    margin: 10px 0px;
  }
}
</style>