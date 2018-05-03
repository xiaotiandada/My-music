<template>
  <div class="itemM">
    <div class="itemTiele">
      <h3 class="jxgd">
        <b>精选</b> 歌单
      </h3>
      <a href="#" target="_blank" class="moreR">更多</a>
    </div>
    <div class="itemComtentL">
  
      <div v-for="(item, index) in listCpt" 
      class="cpt" 
      :key="index" 
      :class="[ item.playId ? 'cptMid' : 'cptBig'  ]">
        <a href="#" target="_blank" class="itemZA">
          <div class="play_btn">{{item.playText}}</div>
        </a>
        <p class="cptT">
          <span class="icon"></span>
          <span class="num">{{item.playNum}}</span>
        </p>
        <img :src="item.playSrc" alt="">
        <div class="cptB">
          <p class="songListName">{{item.playName}}</p>
          <p class="songListSinger">{{item.playSinger}}</p>
        </div>
      </div>
  
    </div>
  
  </div>
</template>

<script>
  export default {
    props: {
      listCpt: {
        type: Array,
        defautl: []
      }
    }
  }
</script>

<style>
  
</style>
