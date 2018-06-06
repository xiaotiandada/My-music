<template>
  <div class="admin-about">
    <el-row :gutter="40" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <panel-lottie :animationDataPath="animationDataPathOne"></panel-lottie>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <panel-lottie :animationDataPath="animationDataPathTwo"></panel-lottie>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <panel-lottie :animationDataPath="animationDataPathThree"></panel-lottie>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <panel-lottie :animationDataPath="animationDataPathFour"></panel-lottie>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import panelLottie from './panelLottie.vue'
  export default {
    components: {
      panelLottie
    },
    data() {
      return {
        animationDataPathOne: require('../../../public/json/compass.json'),
        animationDataPathTwo: require('../../../public/json/api.json'),
        animationDataPathThree: require('../../../public/json/dev.json'),
        animationDataPathFour: require('../../../public/json/update.json')
      }
    }
  }
</script>

<style lang="less">
  .panel-group {
    margin-top: 18px;
    .card-panel-col {
      margin-bottom: 32px;
    }
  }
  
  .admin-about {
    padding: 32px;
    background-color: rgba(240, 242, 245, 1);
  }
  
  .lottie {
    height: 100%;
  }
</style>
