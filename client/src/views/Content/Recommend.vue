<template>
            <div class="itemTwoRightContent">
                <div class="itemTiele itemTwoRightContentTitle">
                    <h3 class="tjmv">
                        <b>精选</b> 歌单
                    </h3>
                    <a href="#" target="_blank" class="moreRR">更多</a>
                </div>
                <div v-for="(item, index) in listRecommend" 
                :class="[ item.reId ? 'itemTwoRightContentMidl': 'itemTwoRightContentBigL' ]" 
                :key="index" 
                class="cpt">
                    <a href="#" target="_blank" class="itemZA">
                        <div class="play_btn">{{item.reTitle}}</div>
                    </a>
                    <a href="#" target="_blank">
                        <img :src="item.reSrc" :alt="item.reAlt">
                        <div class="cptB">
                            <p class="songListName">{{item.reName}}</p>
                            <p class="songListSinger">{{item.reSinger}}</p>
                        </div>
                    </a>
                </div>
            </div>
</template>

<script>
export default {
  props: {
    listRecommend: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>

</style>
