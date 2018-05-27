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
        <div class="song-albumData ri">
          <div class="song-name">
            <p>从开始到现在</p>
          </div>
          <div class="song-dateil">
            <p>
              <span>专辑：</span>
              <a href="">张信哲Jeff情歌精选</a>
            </p>
  
            <p>
              <span>歌手：</span>
              <a href="">张信哲</a>
            </p>
  
          </div>
          <div class="song-word">
            <p>张信哲 - 从开始到现在</p>
            <p>词：李焯雄</p>
            <p>曲：吴熙俊/刘海俊</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
            <p>为何我还忘不了你</p>
          </div>
        </div>
      </div>
    </div>
    <div class="song-module">
      <div class="song-module-bg"></div>
      <div class="song-module-player">
        <div class="song-player-left"></div>
        <div class="song-player-albumImg"></div>
        <div class="song-player-bar"></div>
        <div class="song-player-right"></div>
      </div>
    </div>
    <div class="song-bg"></div>
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
    background: #000;
    overflow: hidden;
  }
  
  .song-content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 99;
    .song-content-data {
      width: 840px;
      position: relative;
      left: 50%;
      margin-left: -420px;
      overflow: hidden;
      .song-album {
        width: 260px;
        margin-top: 100px;
      }
      .song-albumData {
        width: 460px;
        min-height: 500px;
        margin-top: 100px;
      }
    }
  }
  
  .song-albumImg {
    width: 260px;
    height: 260px;
    border-radius: 3px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  
  .song-word {
    width: 460px;
    height: 410px;
    overflow: auto;
  }
  
  .song-module {
    position: fixed;
    width: 100%;
    height: 80px;
    bottom: 0;
    z-index: 1000;
    .song-module-bg {
      position: absolute;
      left: 0;
      width: 100%;
      height: 80px;
      background-color: #000;
      opacity: .3;
      filter: alpha(opacity=30);
      box-shadow: 0 -10px 20px #403f3f;
    }
    .song-module-player {
      position: relative;
      width: 1000px;
      height: 80px;
      margin: 0 auto;
    }
  }
  
  .song-player-left {
    float: left;
    width: 210px;
    height: 80px;
    background-color: #000;
  }
  
  .song-player-albumImg {
    float: left;
    width: 110px;
    height: 80px;
    background-color: rgb(255, 0, 0);
  }
  
  .song-player-bar {
    float: left;
    width: 400px;
    height: 80px;
    background-color: rgb(251, 255, 0);
  }
  
  .song-player-right {
    float: left;
    width: 280px;
    height: 80px;
    background-color: rgb(0, 174, 255);
  }
  
  .song-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    // filter: url(blur.svg#blur);
    -webkit-filter: blur(90px);
    -moz-filter: blur(90px);
    -ms-filter: blur(90px);
    filter: blur(90px);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(http://imge.kugou.com/stdmusic/20171030/20171030114102986807.jpg);
  }
</style>
