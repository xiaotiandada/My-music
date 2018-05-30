<template>
  <div class="song-list">
    <v-nav></v-nav>
    <song-list></song-list>
  
    <v-footer :listLink="listLink"></v-footer>
  </div>
</template>

<script>
  import VNav from '@/views/Nav/Index'
  import VFooter from '@/views/Footer/Index'
  import SongList from '@/views/Song/components/SongList'
  export default {
    components: {
      VNav,
      VFooter,
      SongList
    },
    data() {
      return {
        listLink: [{
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        }
        ]
      }
    }
  }
</script>

<style lang="less">
  .song-list {
    width: 100%;
    height: 100%;
  }
</style>
