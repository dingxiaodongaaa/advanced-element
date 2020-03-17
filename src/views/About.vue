<template>
  <div class="about">
    <el-form label-width="80px">
      <c-pick label="性别" placeholder="选择性别" node="26" defaultValue="0501"></c-pick>
    </el-form>
  </div>
</template>

<script>
  import CPick from "../components/CPick"
  export default {
    components:{
      CPick
    },
  }
</script>
<style scoped>
  .about{
    text-align:left;
  }
</style>
