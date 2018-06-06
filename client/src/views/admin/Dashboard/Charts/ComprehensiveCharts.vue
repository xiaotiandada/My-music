<template>
  <el-row class="charts">
    <el-col :xs="24" :sm="24" :lg="8">
      <ve-pie :data="chartData" :settings="chartSettings" class="comprehensive-charts"></ve-pie>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8">
      <ve-pie :data="chartData" :settings="chartSettings" class="comprehensive-charts"></ve-pie>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8">
      <ve-pie :data="chartData" :settings="chartSettings" class="comprehensive-charts"></ve-pie>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      this.chartSettings = {
        roseType: 'radius'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [{
            '日期': '1/1',
            '访问用户': 1393
          },
          {
            '日期': '1/2',
            '访问用户': 3530
          },
          {
            '日期': '1/3',
            '访问用户': 2923
          },
          {
            '日期': '1/4',
            '访问用户': 1723
          },
          {
            '日期': '1/5',
            '访问用户': 3792
          },
          {
            '日期': '1/6',
            '访问用户': 4593
          }
          ]
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .charts {
    // background: rgb(255, 255, 255);
    // padding: 16px 16px 0px;
    // margin-bottom: 32px;
    margin-left: -16px;
    margin-right: -16px;
  }
  
  .comprehensive-charts {
    margin-left: 16px;
    margin-right: 16px;
    background-color: #fff;
  }
</style>
