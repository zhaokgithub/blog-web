<style>
   .content-list {
        min-width: 200px;
        width: 100%;
    }
    .panel-header {
        background-color: ;
        height: 30px;
        width: 100%;
        padding:10px 0px;
    }
    .panel-body {
        height: 0px;
        width: 100%;
        padding: 0px;
        transition: height .5s;
        background-color: white;
    }
</style>

<template>
    <div>
        <div class="panel-header" @click="changeSubState">
            <div style="float:left;">
                <i class="el-icon-caret-right" v-show="!isShowPanelBody"></i>
                <i class="el-icon-caret-bottom" v-show="isShowPanelBody"></i>
                <span>{{panelTitle}}</span>
                <slot name="header" style="padding:0px;"></slot>
            </div>
        </div>
        <div class="panel-body">
            <div>
                 <slot name="body" style="padding:0px;"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShowPanelBody: true
            }
        },
        props: {
             expand: {
                 type: Boolean,
                 default:function () {
                     return true
                 }
             },
            bodyHeight: {
                type: Number,
                default: function() {
                    return 80
                }
            },
            panelTitle: {
                type:String,
                default: function () {
                    return 'title'
                }
            }
        },
        created: function() {
            this.isShowPanelBody = this.expand
        },
        mounted: function () {
            let ele = document.querySelector('.panel-body')
            ele.style.height = !this.expand ? '0px' : this.bodyHeight + 'px'
            
        },
        methods: {
            changeSubState() {
                let ele = document.querySelector('.panel-body')
                ele.style.height = window.getComputedStyle(ele, null).height == this.bodyHeight + 'px' ? '0px' : this.bodyHeight + 'px'
                this.isShowPanelBody = !this.isShowPanelBody
            }
        }
    }
</script>
