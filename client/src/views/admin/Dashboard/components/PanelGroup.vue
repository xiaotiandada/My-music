<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-star-on"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日活跃</div>
          <div class="card-panel-num">2600</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <i class="el-icon-star-on"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日活跃</div>
          <div class="card-panel-num">2600</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="el-icon-star-on"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日活跃</div>
          <div class="card-panel-num">2600</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <i class="el-icon-star-on"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日活跃</div>
          <div class="card-panel-num">2600</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
  
  }
</script>

<style lang="less" scoped>
.panel-group{
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel{
    height: 108px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover{
      .card-panel-icon-wrapper{
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }
    .card-panel-icon-wrapper{
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all .38s ease-out;
      border-radius: 6px;
      i{
        float: left;
        font-size: 48px;

        width: 1em;
        height: 1em;
        vertical-align: -.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
    // 未用到
    .card-panel-icon{
      float: left;
      font-size: 48px;
    }
    .card-panel-description{
      float: right;
      font-weight: bold;
      margin: 26px 26px 26px 0;
      .card-panel-text{
        line-height: 18px;
        color: rgba(0, 0, 0, .45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      // 未用到      
      .card-panel-num{
        font-size: 20px;
      }
    }
  }
}
</style>
