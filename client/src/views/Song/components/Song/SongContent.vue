<template>
  <div class="song-container">
    <div class="song-content">
      <div class="song-content-data">
        <div class="song-album fl">
          <div class="song-albumImg">
            <a href="">
              <img src="http://imge.kugou.com/stdmusic/20161008/20161008172715434418.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="song-albumData ri"></div>
      </div>
    </div>
    <div class="song-module">1</div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="less">
  .song-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(224, 223, 223);
    overflow: hidden;
  }
  
  .song-content {
    width: 100%;
    height: 100%;
    background: #333;
    .song-content-data {
      width: 840px;
      height: 100%;
      position: relative;
      left: 50%;
      margin-left: -420px;
      .song-album {
        width: 260px;
        margin-top: 100px;
      }
      .song-albumData {
        width: 460px;
        height: 100%;
        background: rgb(208, 10, 248);
      }
    }
  }

  .song-albumImg{
    width: 260px;
    height: 260px;
    border-radius: 3px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  
  .song-module {
    position: fixed;
    width: 100%;
    height: 80px;
    bottom: 0;
    z-index: 1000;
    background-color: rgb(255, 0, 0);
  }
</style>
