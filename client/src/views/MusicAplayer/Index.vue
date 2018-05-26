<template>
  <div class="music-container">
    <div class="music-aplayer">
      <aplayer :showLrc="true" :music="musicPlayer" :list="musicList" />
    </div>
    <div class="music-bg" v-bind:style="{backgroundImage: 'url(' + albumpic_big + ')'}">
  
    </div>
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  export default {
    components: {
      Aplayer
    },
    data() {
      return {
        musicIndex: 0,
        musicList: [{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }
        ]
      }
    },
    computed: {
      musicPlayer() {
        return this.musicList[this.musicIndex]
      },
      albumpic_big() {
        // return this.musicList[this.musicIndex].pic
        return 'http://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg'
      }
    },
    created() {
      this.con()
    },
    methods: {
      con() {
        const musicbg = document.getElementById('music-bg')
        console.log(musicbg)
      }
    }
  }
</script>

<style>
  .music-container {
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    position: relative;
  }
  
  .music-aplayer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    margin-top: 120px;
    z-index: 999;
  }
  
  .music-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    transition: all .3s;
    z-index: 1;
  }
  
  .music-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .7;
    -weikit-filter: blur(2px);
    filter: blur(2px);
    background: inherit;
    z-index: 2;    
  }
</style>
