<template>
  <div class="song-container">
    <div class="song-content">
      <div class="song-content-data">
        <div class="song-album fl">
          <div class="song-albumImg">
            <a href="">
              <img :src="musicImgUrl" :alt="musicTitle">
            </a>
          </div>
          <a href="javascript:;" class="song-album-download">下载这首歌</a>
        </div>
        <div class="song-albumData ri">
          <div class="song-name">
            <p>{{musicTitle}}</p>
          </div>
          <div class="song-dateil">
            <!-- <p>
                      <span>专辑：</span>
                      <a href="">张信哲Jeff情歌精选</a>
                    </p>

                    <p>
                      <span>歌手：</span>
                      <a href="">张信哲</a>
                    </p>
           -->
          </div>
          <div class="song-word">

            <p v-for="(item, index) in musiclrc" :key="index">
              {{item.text}}</p>

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
            <img :src="musicImgUrl" :alt="musicTitle">
          </a>
        </div>
        <div class="song-player-bar">
          <div class="song-player-bar-info">
            <div class="like-song">
              <span>{{musicTitle}}</span>
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
            <!-- :change="musicPlayheadChange(musicPlayhead) -->
            <el-slider class="song-player" v-model="musicPlayhead" :show-tooltip="false"></el-slider>
          </div>
        </div>
        <div class="song-player-right">
          <a href="javascript:;" class="icon-player icon-player-maxvox"></a>
          <a href="javascript:;" class="icon-player icon-player-cycle"></a>
          <a href="javascript:;" class="icon-player icon-player-download"></a>
          <a href="javascript:;" class="icon-player icon-player-share"></a>
          <a @click="musicToogleList" href="javascript:;" class="icon-player icon-player-list">
            <span>{{musicBarlist.length}}</span>
          </a>
        </div>
        <div class="song-player-list"  :class="{'musicshow': musicBarlistClass}">
          <ul>
            <li v-for="(item, index) in musicBarlist" :key="index"><a @click="songPlayBarList(index)" href="">{{index+1}} {{item.name}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="song-bg" :style="{ backgroundImage: 'url('+musicImgUrl+')' }"></div>
    <div class="song-audio">
      <audio ref="musicAudio" :src="musicmp3" controls></audio>
    </div>
  </div>
</template>

<script>
  import musicService from '@/services/musicService'
  export default {
    data() {
      return {
        musicToogleClass: false,
        musicPlayhead: 0,
        musicIndex: 0,
        musicList: [],
        musicmp3: '',
        musicklyric: '',
        musiclrc: [],
        musicTitle: '',
        musicImgUrl: '',
        musicBarlist: [],
        musicBarlistClass: false
      }
    },
    created() {
      // const id = this.$route.params.id
      const id = this.$route.query.id
      this.getMusicUrl(id)
      this.gelyricUrl(id)
      this.getSongDetail(id)
      this.getTopList()
    },
    mounted() {},
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
        this.musicPlayhead = 0

        this.musicPlay()
      },
      musicNext() {
        let index = this.musicIndex + 1
        if (index === this.musicList.length) {
          index = 0
        }
        this.musicIndex = index
        this.musicToogleClass = true
        this.musicPlayhead = 0

        this.musicPlay()
      },
      musicToogle() {
        this.musicToogleClass = !this.musicToogleClass

        this.musicPlay()
      },
      musicPlay() {
        this.$nextTick(() => {
          this.$refs.musicAudio.paused ? this.$refs.musicAudio.play() : this.$refs.musicAudio.pause()
        })
      },
      musicPlayheadChange(musicPlayhead) {
        console.log(musicPlayhead)
        this.$nextTick(() => {
          this.$refs.musicAudio.currentTime = musicPlayhead
          this.musicToogle()
        })
      },

      parseLyric(lrc) {
        const lyrics = lrc.split('\n')
        const lrcObj = []
        for (let i = 0; i < lyrics.length; i++) {
          const lyric = decodeURIComponent(lyrics[i])
          const timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
          const timeRegExpArr = lyric.match(timeReg)
          if (!timeRegExpArr) continue
          const clause = lyric.replace(timeReg, '')
          for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
            const t = timeRegExpArr[k]
            const min = Number(String(t.match(/\[\d*/i)).slice(1))
            const sec = Number(String(t.match(/\:\d*/i)).slice(1))
            const time = min * 60 + sec
            if (clause !== '') {
              lrcObj.push({
                time: time,
                text: clause
              })
            }
          }
        }
        return lrcObj
      },

      songPlayBarList(index) {
        this.$router.push({
          path: 'songplay',
          // name: 'songplay',
          query: {
            id: this.musicBarlist[index].id
          }
        })
        console.log(this.musicBarlist[index].id)
      },

      // 请求方法
      musicToogleList() {
        this.musicBarlistClass = !this.musicBarlistClass
      },
      async getTopList() {
        const _this = this
        try {
          await musicService.topList()
            .then(function(response) {
              const data = response.data
              if (data.code === 200) {
                _this.musicBarlist = data.playlist.tracks
              }
            })
            .catch(function(error) {
              console.log(error)
            })
        } catch (e) {
          console.log(e)
        }
      },
      async getMusicUrl(id){
        const _this = this
        try {
          await musicService.getMusicUrl(id)
            .then(function (response) {
              const data = response.data
              if (data.code === 200) {
                _this.musicmp3 = data.data['0'].url
              }
            })
            .catch(function (err) {
              console.log(err)
            })
        } catch (e) {
          console.log(e)
        }
      },
      async gelyricUrl(id){
        const _this = this
        try {
          await musicService.gelyricUrl(id)
            .then((response) => {
                  const data = response.data
                  if (data.code === 200) {
                    // console.log(data)
                    _this.musicklyric = data.klyric
                    _this.musiclrc = _this.parseLyric(data.lrc.lyric)
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
        } catch (e) {
          console.log(e)
        }
      },
      async getSongDetail(id){
        const _this = this
        try {
          await musicService.getSongDetail(id)
            .then((response) => {
                  const data = response.data
                  if (data.code === 200) {
                    // console.log(data)
                    _this.musicTitle = data.songs['0'].al.name
                    _this.musicImgUrl = data.songs['0'].al.picUrl
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
        } catch (e) {
          console.log(e)
        }
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
  .song-name{
    p{
      color: #fff;
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
    // transition: all .28s;
    // &:hover {
    //   margin-top: 42px;
    // }
  }

  .song-word {
    width: 460px;
    height: 410px;
    overflow: auto;
    p{
      color: #fff;
      font-size: 16px;
      font-weight: normal;
    }
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
      .song-player-list {
        position: absolute;
        right: 0;
        top: -410px;
        width: 480px;
        height: 410px;
        background-color: #2a2e35;
        display: none;
        overflow: auto;
        border-radius: 3px;
        overflow-x: hidden;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            border-bottom: 1px solid #40444b;
            padding: 2px 10px;
            &:hover {
              background-color: #363a41;
            }
            a {
              color: #fff;
              line-height: 40px;
              width: 100%;
              height: 40px;
              line-height: 40px;
              display: block;
              text-align: left;
              // background-color: #40444b;
              cursor: pointer;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
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
    display: none;
  }

  .musicshow{
    display: block !important;
  }
</style>
