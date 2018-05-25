<template>
  <div class="music-aplayer">
    <aplayer autoplay float :showLrc="true" :music="musicPlayer" :list="musicList" />
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
    }
  }
</script>

<style>
  .music-aplayer {
    width: 50%;
    margin: 200px auto;
  }
</style>
