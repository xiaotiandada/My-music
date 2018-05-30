<template>
  <div class="song-list">
    <v-nav></v-nav>
    <song-list></song-list>

    <v-footer></v-footer>
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
    }
  }
</script>

<style lang="less">
  .song-list {
    width: 100%;
    height: 100%;
  }
</style>
