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
            <div class="song-word" ref="musicLyric">
              <gemini-scrollbar class="my-scroll-bar">
              <div class="song-word-top" :style="lyricTop">
                <p v-for="(item, index) in musiclrc" :key="index">
                {{item.text}}
                </p>
              </div>

              </gemini-scrollbar>

  
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
        <div class="song-player-list" :class="{'musicshow': musicBarlistClass}">
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
    components: {
    },
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
    computed: {
      musicSrc() {
        return this.musicList[this.musicIndex]
      }
    },
    mounted() {
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
        await musicService.getTopList()
          .then(function(response) {
            const data = response.data
            if (data.code === 200) {
              _this.musicBarlist = data.playlist.tracks
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      async getMusicUrl(id) {
        const _this = this
        await musicService.getMusicUrl(id)
          .then(function(response) {
            const data = response.data
            if (data.code === 200) {
              _this.musicmp3 = data.data['0'].url
            }
          })
          .catch(function(err) {
            console.log(err)
          })
      },
      async gelyricUrl(id) {
        const _this = this
        await musicService.gelyricUrl(id)
          .then((response) => {
            const data = response.data
            if (data.code === 200) {
              _this.musicklyric = data.klyric
              _this.musiclrc = _this.parseLyric(data.lrc.lyric)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
      async getSongDetail(id) {
        const _this = this
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
      }
  
    },
    watch: {

    }
  
  }
</script>

<style lang="less">


</style>
