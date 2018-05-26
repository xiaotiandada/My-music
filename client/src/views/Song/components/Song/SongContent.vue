<template>
  <div class="song-container">
    <div class="song-content">1</div>
    <div class="song-module">1</div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="less">
  .song-container{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(224, 223, 223);
    overflow: hidden;
  }
  .song-content{
    width: 100%;
    height: 100%;
    background: #333;
  }
  .song-module{
    position: fixed;
    width: 100%;
    height: 80px;
    bottom: 0;
    z-index: 1000;
    background-color: rgb(255, 0, 0);
  }
</style>
