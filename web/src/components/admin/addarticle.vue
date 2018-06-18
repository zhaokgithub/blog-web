<template>
    <div style="width:1200px;">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>增加文章数据</span>
            </div>
            <el-form :model="formData" ref="formData" label-width="100px">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="formData.author"></el-input>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input type="textarea" v-model="formData.content" :rows="20"></el-input>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="时间" prop="create_date">
                            <el-date-picker type="date" v-model="formData.create_date"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="分类" prop="article_category">
                            <el-select v-model="initCategory" placeholder="分类">
                                <el-option v-for="(value,index) of categories" :key="index" :label="value" :value="value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="点赞数" prop="popular_num">
                            <el-input-number v-model="formData.popular_num" :min="0" label="点赞数"></el-input-number>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="浏览数" prop="view_num">
                            <el-input-number v-model="formData.view_num" :min="0" label="浏览数"></el-input-number>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-row style="border-top:solid 1px #ebeef5;padding:5px;">
                <el-col :span="24">
                    <el-button type="primary" style="float:right;" @click="submitForm">提交</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-dialog title="提示" :visible.sync="isShowInfoDialog" width="30%" center>
            <span>文章添加成功!</span>
            <span slot="footer">
                <el-button @click="isShowInfoDialog = false">关闭</el-button>
              </span>
        </el-dialog>
    </div>
</template>

<script>
    import {
        ServerHost
    } from '../../config.js'
    export default {
        // title: {type : String, default : 'title'},
        data() {
            return {
                isShowInfoDialog: false,
                formData: {
                    title: '',
                    author: '',
                    create_date: new Date(),
                    comments: '',
                    content: '',
                    article_category: 0,
                    popular_num: 0,
                    view_num: 0
                },
                initCategory: "javascript",
                categories: ['javascript', 'vue', 'nodejs'],
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitForm: function() {
                let url = `${ServerHost}/article/list`
                console.log(this.formData)
                this.$axios.put(url, this.formData).then((response) => {
                    if (response.status == 200) {
                        // for (let key in this.formData) {
                        //     this.formData[key] = null
                        // }
                        // this.formData.create_date = new Date()
                        this.isShowInfoDialog = true
                    }
                })
            }
        }
    }
</script>