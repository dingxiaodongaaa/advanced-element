<template>
  <div class="step">
    <div style="width:150px;height:300px;" class="el-steps el-steps--vertical">
        <div class="el-step is-vertical" style="flex-basis: 50%;" v-for="(item,index) in stepsArr" :key="index">
            <div class="el-step__main">
                <div class="el-step__title is-finish" style="padding-right:15px">{{item.label}}</div>
                <div class="el-step__description is-finish"></div>
            </div>
            <div class="el-step__head is-finish">
                <div class="el-step__line" style="margin-right: 0px;">
                    <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
                </div>
                <div class="el-step__icon is-text" style="cursor:pointer" @click="scrollToView(item.id)">
                    <div class="el-step__icon-inner">{{index+1}}</div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        stepsArr:{
            type:Array,
            required: true
        },
        height:{
            type: Number,
            default: 300
        },
        width:{
            type: Number,
            default: 150
        }
    },
    methods:{
        scrollToView(id){
            document.getElementById(id).scrollIntoView()
            // let jump = document.getElementById(id)
            // // 获取需要滚动的距离
            // let total = jump.offsetTop;
            // console.log(total)
            // // Chrome
            // document.body.scrollTop = total
            // // Firefox
            // document.documentElement.scrollTop = total
            // // Safari
            // window.pageYOffset = total
        }
    }
}
</script>>
<style>
    
</style>

