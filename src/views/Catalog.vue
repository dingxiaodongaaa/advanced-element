<template>
  <div class="catalog">
    <Step :stepsArr="dataList"></Step>
    <div id="1" class="divNum">1</div>
    <div id="2" class="divNum">2</div>
    <div id="3" class="divNum">3</div>
    <div id="4" class="divNum">4</div>
    <div id="5" class="divNum">5</div>
    <div id="6" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
    <div id="8" class="divNum">6</div>
  </div>
</template>

<script>
  import Step from '@/components/Step.vue'

  export default{
    components:{
      Step,
    },
    data(){
      return {
        dataList:[
          {
            label:"个人信息",
            id:"1"
          },
          {
            label:"合同信息",
            id:"2"
          },{
            label:"学历信息",
            id:"3"
          },
          {
            label:"家庭信息",
            id:"4"
          },
          {
            label:"银行信息",
            id:"5"
          },
          {
            label:"个人材料",
            id:"6"
          },
        ]
      }
    },

  }

</script>

<style scoped>
  .divNum{
    width:150px;
    height:150px;
    background:yellow;
    margin:10px;
  }
</style>
