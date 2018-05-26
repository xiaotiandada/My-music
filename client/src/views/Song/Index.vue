<template>
  <div class="song-page">
    <v-nav></v-nav>
    <v-song></v-song>
  </div>
</template>

<script>
  import VNav from '@/views/Nav/Index'
  import VSong from '@/views/Song/components/Song/SongContent'
  export default {
    components: {
      VNav,
      VSong
    }
  }
</script>

<style lang="less">
  .song-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
