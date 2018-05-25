<template>
  <div class="music-container">
    <div class="music-aplayer">
      <aplayer :showLrc="true" :music="musicPlayer" :list="musicList" />
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
        musicList: [
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
      }
    },
    created() {
      document.body.style.backgroundImage = 'url(https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg)'
    }
  }
</script>

<style>
.music-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
  .music-aplayer {
    width: 50%;
    margin: 120px auto 0;
  }
</style>
