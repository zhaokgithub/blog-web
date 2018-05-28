<style>
</style>

<template>
    <div class="content-list">
        <Collapase>
        <div slot="body">
            <p>ddddddddddd</p>
        </div>
        </Collapase>
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
