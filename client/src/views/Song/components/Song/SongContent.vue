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
          <a href="javascript:;" class="song-album-download">下载这首歌</a>
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
        <div class="song-player-left">
          <a @click="musicPrev" href="javascript:;" class="icon-player icon-player-prev"></a>
          <a @click="musicToogle" :class="{ 'icon-player-pause' : musicToogleClass, 'icon-player-play' : !musicToogleClass}" href="javascript:;" class="icon-player"></a>
          <a @click="musicNext" href="javascript:;" class="icon-player icon-player-next"></a>
        </div>
        <div class="song-player-albumImg">
          <a href="javascript:;">
            <img src="http://imge.kugou.com/stdmusic/20180412/20180412102100216136.jpg" alt="">
          </a>
        </div>
        <div class="song-player-bar">
          <div class="song-player-bar-info">
            <div class="like-song">
              <span>终于爱情</span>
            </div>
            <div class="coding-duration">
              <span>
                                                <i>00:13</i>
                                                /
                                                <i>04:28</i>
                                              </span>
            </div>
          </div>
          <div class="song-player-bar-bar">
            <!-- <span class="icon-player icon-playbar-playhead"></span> -->
            <el-slider class="song-player" v-model="musicPlayhead" :show-tooltip="false" :change="musicPlayheadChange(musicPlayhead)"></el-slider>
          </div>
        </div>
        <div class="song-player-right">
          <a href="javascript:;" class="icon-player icon-player-maxvox"></a>
          <a href="javascript:;" class="icon-player icon-player-cycle"></a>
          <a href="javascript:;" class="icon-player icon-player-download"></a>
          <a href="javascript:;" class="icon-player icon-player-share"></a>
          <a href="javascript:;" class="icon-player icon-player-list">
            <span>20</span>
          </a>
        </div>
      </div>
    </div>
    <div class="song-bg"></div>
    <div class="song-audio">
      <audio ref="musicAudio" :src="musicSrc" controls></audio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        musicToogleClass: false,
        musicPlayhead: 0,
        musicIndex: 0,
        musicList: [
          'https://music.163.com/song/media/outer/url?id=450424527.mp3',
          'https://music.163.com/song/media/outer/url?id=557581284.mp3',
          'https://music.163.com/song/media/outer/url?id=452986458.mp3'
        ]
      }
    },
    computed: {
      musicSrc() {
        return this.musicList[this.musicIndex]
      }
    },
    methods: {
      musicPrev() {
        let index = this.musicIndex - 1
        if (index < 0) {
          index = this.musicList.length - 1
        }
        this.musicIndex = index
        this.musicToogleClass = true
  
        this.$nextTick(() => {
          this.$refs.musicAudio.paused ? this.$refs.musicAudio.play() : this.$refs.musicAudio.pause()
        })
      },
      musicNext() {
        let index = this.musicIndex + 1
        if (index === this.musicList.length) {
          index = 0
        }
        this.musicIndex = index
        this.musicToogleClass = true
  
        this.$nextTick(() => {
          this.$refs.musicAudio.paused ? this.$refs.musicAudio.play() : this.$refs.musicAudio.pause()
        })
      },
      musicToogle() {
        this.musicToogleClass = !this.musicToogleClass
  
        this.$nextTick(() => {
          this.$refs.musicAudio.paused ? this.$refs.musicAudio.play() : this.$refs.musicAudio.pause()
        })
      },
      musicPlayheadChange(musicPlayhead) {
        console.log(musicPlayhead)
      }
    }
  
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
        margin-top: 50px;
      }
    }
    .song-albumData {
      width: 460px;
      min-height: 500px;
      margin-top: 30px;
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
  
  .song-album-download {
    display: block;
    width: 230px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 30px;
    line-height: 50px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    margin-top: 40px;
    margin-left: 16px;
    cursor: pointer;
    transition: all .28s;
    &:hover {
      margin-top: 42px;
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
    .icon-player-prev {
      float: left;
      width: 36px;
      height: 36px;
      overflow: hidden;
      background-position: 0 -143px;
      margin: 22px 6px 0 27px;
      &:hover {
        background-position: -36px -143px;
      }
      &:active {
        background-position: -72px -143px;
      }
    }
    .icon-player-play {
      float: left;
      width: 60px;
      height: 60px;
      overflow: hidden;
      background-position: 0 0;
      margin: 10px 6px 0;
      &:hover {
        background-position: -60px 0;
      }
      &:active {
        background-position: -120px 0;
      }
    }
    .icon-player-pause {
      float: left;
      width: 60px;
      height: 60px;
      overflow: hidden;
      background-position: 0 -60px;
      margin: 10px 6px 0;
      &:hover {
        background-position: -60px -60px;
      }
      &:active {
        background-position: -120px -60px;
      }
    }
    .icon-player-next {
      float: left;
      width: 36px;
      height: 36px;
      overflow: hidden;
      background-position: -144px -143px;
      margin: 22px 6px 0;
      &:hover {
        background-position: -180px -143px;
      }
      &:active {
        background-position: -216px -143px;
      }
    }
  }
  
  .song-player-albumImg {
    float: left;
    width: 110px;
    height: 80px;
    overflow: hidden;
    img {
      width: 60px;
      height: 60px;
      outline: none;
      border: 0;
      margin-top: 10px;
    }
  }
  
  .song-player-bar {
    float: left;
    width: 400px;
    height: 80px;
    .song-player-bar-info {
      padding-top: 18px;
      height: 24px;
      cursor: default;
    }
    .song-player-bar-bar {
      cursor: pointer;
      .song-player {
        padding-left: 6px;
        padding-right: 6px;
      }
      .el-slider__button {
        border: 0;
        width: 14px;
        height: 14px;
      }
      .el-slider__button.hover {
        transform: scale(1.1);
      }
      .el-slider__runway,
      .el-slider__bar {
        height: 4px;
      }
      .el-slider__button-wrapper {
        top: -16px;
      }
    }
  }
  
  .like-song {
    float: left;
    width: 290px;
    height: 24px;
    overflow: hidden;
    span {
      float: left;
      word-break: break-all;
      word-wrap: break-word;
      white-space: nowrap;
      line-height: 24px;
      font-size: 14px;
      color: #c4c3c3;
    }
  }
  
  .coding-duration {
    float: right;
    width: 110px;
    height: 24px;
    span {
      color: #fff;
      font-size: 14px;
      opacity: .4;
      filter: alpha(opacity=40);
      line-height: 24px;
      i {
        font-style: normal;
      }
    }
  }
  
  .song-player-right {
    float: left;
    width: 280px;
    height: 80px;
    .icon-player-maxvox {
      background-position: -64px -195px;
      &:hover {
        background-position: -80px -195px;
      }
      &:active {
        background-position: -96px -195px;
      }
    }
    .icon-player-cycle {
      background-position: -64px -179px;
      &:hover {
        background-position: -80px -179px;
      }
      &:active {
        background-position: -96px -179px;
      }
    }
    .icon-player-download {
      background-position: -240px -32px;
      &:hover {
        background-position: -256px -32px;
      }
      &:active {
        background-position: -272px -32px;
      }
    }
    .icon-player-share {
      background-position: -240px 0;
      &:hover {
        background-position: -256px 0;
      }
      &:active {
        background-position: -272px 0;
      }
    }
    .icon-player-list {
      width: 60px;
      height: 23px;
      background-position: 0 -120px;
      margin-top: 32px;
      span {
        margin-left: 26px;
        color: #fff;
        font-size: 14px;
        line-height: 23px;
      }
      &:hover {
        background-position: -61px -120px;
        span {
          color: #1987b2;
        }
      }
      &:active {
        background-position: -120px -120px;
      }
    }
  }
  
  .icon-player-maxvox,
  .icon-player-cycle,
  .icon-player-download,
  .icon-player-share,
  .icon-player-list {
    float: left;
    width: 16px;
    height: 16px;
    line-height: 16px;
    margin-left: 31.2px;
    margin-top: 34px;
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
  
  .song-audio {
    position: absolute;
    top: 0;
    z-index: 999;
  }
</style>
