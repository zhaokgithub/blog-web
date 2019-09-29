<style>
    .content-list {
        height: 800px;
        min-width: 900px;
        margin-top: 90px;
        text-align: left;
    }
    .comments-content{
        display: flex;
        margin-top: 80px;
        border-bottom: solid 1px #dcdfe6; 
        height: 100px;
    }
</style>
<template>
    <div class="content-list">
        <div>
            <h2>Your Suggestion</h2>
            <el-input  type="textarea" :rows="10" placeholder="请输入你想说的话..." v-model="comments">
            </el-input>
            <el-button type="primary" style="margin-top:10px;float:right;">发布评论<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                comments:''
            }
        }
    }
</script>