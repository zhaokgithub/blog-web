<template>
  <div class="base-layout">
    <el-container>
        <HeaderLayout></HeaderLayout>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./HeaderLayout";
export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
};
</script>
<style>
.base-layout{
      background: #f9f9f9;
      height: 100%;

}
</style>